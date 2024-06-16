#deploy to main
npm run build
git init
git add .
git cz
git push git@github.com:Afonguwu/wisdom-win-vite.git main:main
#deploy to gh-pages
cd dist
git init
git add -A
git cz
git push  -f git@github.com:Afonguwu/wisdom-win-vite.git master:gh-pages
cd ..
