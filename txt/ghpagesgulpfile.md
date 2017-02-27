# Gh-Pages y Gulpfile

Gulp es un conjunto de herramientas que nos ayudan a automatizar tareas en nuestro proceso de desarrollo, además se puede utilizar con diversos lenguajes y plataformas, esto lo utilizaremos para automatizar las tareas de despliegue de nuestro libro en _gh-pages_.


Para realizar el despliegue de un libro en Github, lo que hay que  hacer es tener disponible una rama Gh-Pages para mostrar el libro en la Github Pages. En esta práctica tal y como se nos indica utilizaremos un gulpfile con la finalidad de automatizar el despliegue en gh-pages.

```
gulp.task('deploy', shell.task([
  'npm run deploy'
]));

gulp.task('serve', shell.task([
  'gitbook serve --port ' + process.env.PORT
]));

gulp.task('build', shell.task([
  'npm run build'
]));
```


Introduciendo estos scripts en el gulpfile solo tendríamos que usar el **gulp deploy**, **gulp serve** y **gulp build**, y el se encargaría de forma automática de realizar la automatización.

Una vez se ha realizado el despliegue del libro, al realizar el commit y el push correspondiente, se podrá visualizar el libro sin ningún tipo de problemas en la GithubPages correspondiente.

