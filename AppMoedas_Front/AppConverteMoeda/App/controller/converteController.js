app.controller(
    'converteCtrl',
    function ($converteSvc) {
        var vm = this;

        //Obtendo valores armazenados no LocalStorage
        vm.Start = function () {
            vm.resultado = window.localStorage.getItem('resultado');
            vm.dataSave = window.localStorage.getItem('data');
            vm.de = window.localStorage.getItem('de');
            vm.para = window.localStorage.getItem('para');
        }

        vm.Converter = function (isValid) {
            if (isValid) {
                vm.mensagem = {};

                $converteSvc.ConverterMoeda(vm.model)
                    .then(function (result) {

                        vm.de = vm.model.entrada;
                        vm.para = vm.model.saida;
                        vm.resultado = result.data;
                        var data = new Date();
                        vm.dataSave = data.toLocaleDateString();


                        //armazenando LocalStorage
                        window.localStorage.setItem('resultado', vm.resultado);
                        window.localStorage.setItem('data', vm.dataSave);
                        window.localStorage.setItem('de', vm.model.entrada);
                        window.localStorage.setItem('para', vm.model.saida);

                    })
                    .catch(function (e) {
                        console.log(e.data);
                    });
            }
        }




    });