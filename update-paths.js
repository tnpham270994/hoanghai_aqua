const fs = require('fs');
const path = require('path');

const htmlFiles = [
    'index.html',
    'about.html',
    'contact.html',
    'product.html',
    'service.html',
    'product-may-loc-nuoc.html'
];

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Update lib paths
    content = content.replace(/src="lib\//g, 'src="assets/lib/');
    content = content.replace(/href="lib\//g, 'href="assets/lib/');
    
    // Update js paths
    content = content.replace(/src="js\//g, 'src="assets/js/');
    
    // Update css paths
    content = content.replace(/href="css\//g, 'href="assets/css/');
    
    // Update img paths
    content = content.replace(/src="img\//g, 'src="assets/img/');
    
    fs.writeFileSync(file, content);
});