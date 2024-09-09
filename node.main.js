const fs = require('fs');
const path = require('path'); 

const folderPath = './'; // 替换为实际的文件夹路径
const list = [];

function scanFolder(directory, rootPath) {
    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            scanFolder(filePath, rootPath); // 递归处理子文件夹
        } else if (path.extname(filePath) === '.md') {
            const content = fs.readFileSync(filePath, 'utf8');
            const name = path.basename(filePath, '.md');
            const desc = content.substring(0, 70);
            const time = stats.birthtime.getTime(); // 获取文件的创建时间戳
            const relativePath = path.relative(rootPath, filePath).replace(/\\/g, '/'); // 获取文件相对于根路径的相对路径
            list.push({ name, desc, time, path: relativePath });
        }
    });
}

scanFolder(folderPath, folderPath);

// 按照时间戳对数组进行排序
list.sort((a, b) => a.time - b.time);

fs.writeFileSync('./list.json', JSON.stringify(list, null, 2));



function searchFiles(keyword) {
    return list.filter(file =>  file.name.toLowerCase().includes(keyword.toLowerCase()) || file.desc.toLowerCase().includes(keyword.toLowerCase()));
}
