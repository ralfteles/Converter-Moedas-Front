app.service(
    '$converteSvc',
    function ($http) {

        var api = "http://localhost:58174/api/"

        var services = {};

        services.ConverterMoeda = function (model) {
            var url = api+"Converter/GetConverteMoeda/entrada/"+model.entrada+"/saida/"+model.saida+"/valor/"+model.valor;

            return $http.get(url);
        }

        return services;
    });
