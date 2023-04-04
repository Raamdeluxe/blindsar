git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f https://github.com/Raamdeluxe/blindsar.git main:gh-pages

cd -