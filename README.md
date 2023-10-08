*tempconv*
=====
Biblioteca escrita em Node.js para conversões simples de temperatura. Desenvolvido como atividade para a disciplina de Software Livre. 

Como usar?
----
Faça o download da biblioteca [tempconv.js](/tempconv/tempconv.js)

Pronto, agora é só usar:
```js
const tempconv = require('./tempconv.js')


function main(){


    console.log(`Que frio! ${tempconv.AbsoluteZeroC} \n` )
	console.log(`Fervendo! ${tempconv.CToF(tempconv.BoilingC)} \n` )
}

main()
```

Outras linguagens?
----
Versões da biblioteca *tempconv* para outras linguagens podem ser encontradas [aqui.](https://github.com/ufla-gcc259/aula-git-parte-2)