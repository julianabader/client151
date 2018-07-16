
const API_BASE = 'https://app-sofi2.herokuapp.com/';

const getResponseJson = path => fetch(`${API_BASE}${path}`)
    .then(response => response.json());

const getParentResult = path => getResponseJson(`parents/${path}`)
const ParentsApi = {
    getAll: () => getParentResult(''),
    get: parentId => getParentResult(parentId),
    getChildren: parentId => getParentResult(`${parentId}/children`),
    getChild: (parentId, childId) => getParentResult(`${parentId}/children/${childId}`),
    getByName: parentName => getParentResult(`byname/${parentName}`)
}



const getCategoryResult = path => getResponseJson(`categories/${path}`)
const difference = function (a, b) { return Math.abs(a - b); }
const CategoriesApi = {
    getAll: () => getCategoryResult(''),
    get: categoryId => getCategoryResult(categoryId),
    getActivities: categoryId => getCategoryResult(`${categoryId}/activities`),
    getActivity: (categoryId, activityId) => getCategoryResult(`${categoryId}/activities/${activityId}`),
    calculateCategoryPercentage: (categories, child) => {
        const _categories = categories.concat();
        return _categories.map(category => {
            let percentage = 0;
            if (!category.time || !category.location) {
                percentage = -1
            } else {
              if (child.location === category.location) {
                percentage = 50;
              }
              const diff = difference(child.time, category.time);
              if (diff === 0) {
                percentage += 50;
              }
              else if (diff < 10) {
                percentage += 40;
              } else if (diff > 10 && diff <= 20) {
                percentage += 30;
              } else if (diff > 20 && diff <= 30) {
                percentage += 20;
              }
            }
            return Object.assign({}, category, { percentage: percentage });
        }).sort((a, b) => a.percentage < b.percentage)
    }
}

const storage = localStorage;
const AuthApi = {
    getCurrentParent: () => {
        const parent = storage.getItem('parent');
        if (parent) return JSON.parse(parent);
    },
    setCurrentParent: parent => {
        storage.setItem('parent', JSON.stringify(parent));
    }
}
export {
    ParentsApi,
    CategoriesApi,
    AuthApi
}