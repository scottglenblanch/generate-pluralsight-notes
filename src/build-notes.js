#!/usr/bin/env node

const fs = require('fs');

const getModuleListFromArgumentInput = () => {
	return JSON.parse(process.argv.slice(2).join(' '));
}

const getCurrentWorkingDirectory = () => process.cwd();

const getSubmoduleNotesFileContents = ({
	subModuleTitle
}) => `# ${subModuleTitle}\n`;

const getSubmoduleNotesFilePath = ({
	parentDirectory,
	subModuleTitle,
}) => `${parentDirectory}/${subModuleTitle.split('/').join('-')}.md`;

const createSubmoduleNotesFile = ({
	parentDirectory,
	subModuleTitle
}) => {
	fs.writeFileSync(
		getSubmoduleNotesFilePath({ parentDirectory, subModuleTitle}), 
		getSubmoduleNotesFileContents({ subModuleTitle })
	);
}

const getModuleDirectoryPath = ({
	parentDirectory,
	moduleTitle
}) => `${parentDirectory}/${moduleTitle.split('/').join('-')}`;

const createModuleDirectory = ({
	parentDirectory,
	moduleTitle,
}) => {
	fs.mkdirSync(
		getModuleDirectoryPath({ parentDirectory, moduleTitle })
	);
};

const createModule = ({
	parentDirectory,
	moduleTitle,
	subModuleTitlesList,			
}) => {
	createModuleDirectory({ parentDirectory, moduleTitle});
	subModuleTitlesList.forEach(subModuleTitle => {
		createSubmoduleNotesFile({
			parentDirectory: getModuleDirectoryPath({ parentDirectory, moduleTitle }),
			subModuleTitle
		});
	});
}

const build = () => {
	getModuleListFromArgumentInput().forEach(({
		moduleTitle,
		subModuleTitlesList,
	}) => {
		createModule({
			parentDirectory: getCurrentWorkingDirectory(),
			moduleTitle,
			subModuleTitlesList,
		});
	})
};

build();
