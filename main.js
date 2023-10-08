const tempconv = require('./tempconv.js')


function main(){


    console.log(`Que frio! ${tempconv.AbsoluteZeroC} \n` )
	console.log(`Fervendo! ${tempconv.CToF(tempconv.BoilingC)} \n` )
}

main()