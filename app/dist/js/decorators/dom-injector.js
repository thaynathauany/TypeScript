export function domInjector(seletorCss) {
    return function (target, propertyKey) {
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletorCss);
                console.log(`Buscando elemento do DOM com o seletor ${seletorCss} para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
//# sourceMappingURL=dom-injector.js.map