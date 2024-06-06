npm run build
git init
git add .
git commit -m ' upgrate'
git push git@github.com:Afonguwu/wisdom-win-vite.git main:main

git checkout gh-pages
cd dist
git add .
git commit -m 'deploy'
git push -f git@github.com:Afonguwu/wisdom-win-vite.git gh-pages:gh-pages
cd ..
git checkout main