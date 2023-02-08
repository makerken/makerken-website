# Recreate

[VitePress](https://vitepress.vuejs.org/guide/getting-started)

Create and change into a new directory
> mkdir makerken-website && cd makerken-website

Initialize with package manager
> npm init

Add VitePress and Vue as dev dependencies
> npm install -D vitepress vue

Create your first document
> mkdir docs && echo '# Hello VitePress' > docs/index.md

`package.json`
```
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```
> npm i vitepress-plugin-auto-sidebar 

### Development server
> npm run docs:dev




### GitHub repo
> git init  

`.gitignore`
```
node_modules
```
> git remote add origin <repo>  
> git add .  
> git commit -m "message"  
> git push -u origin main  

https://vitepress.vuejs.org/guide/deploying
> npm run docs:build

serve files from .vitepress/dist 
> npm run docs:serve 