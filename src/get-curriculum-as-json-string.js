(function() {
    const modulesElementList = Array.from(document.querySelectorAll('.module'));

    const modulesList = modulesElementList.reduce((modulesList, moduleElement, index) => {
        const moduleElementTitle = moduleElement.querySelector('.module-header__title').innerHTML;
        const moduleTitle = `Module ${index + 1} ${moduleElementTitle}`;
        const subModuleElementsList = Array.from(moduleElement.querySelectorAll('.module-content span[title]'));

        const subModuleTitlesList = subModuleElementsList.reduce((subModuleTitlesList, subModule, index) => {
            const subModuleElementTitle = subModule.innerHTML;
            const subModuleTitle = `Submodule ${index + 1} ${subModuleElementTitle}`; 

            subModuleTitlesList.push(subModuleTitle);
            
            return subModuleTitlesList;
        }, []);


        modulesList.push({
            moduleTitle,
            subModuleTitlesList
        });

        return modulesList;

    }, []);

    console.log(JSON.stringify(modulesList, null, 2));
})()
