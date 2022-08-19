export const graficaMovimientos = {
        //Tipo de gráfica que deseo que se muestre en la tabla
        type: "line",

        //Datos necesarios para la gráfica, incluida la leyenda y el set de datos necesarios para mostrar
        data: {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],

          datasets: [
            {
              label: "Gastos",
              data: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8],
              backgroundColor: "rgba(252, 70, 70, .5)",
              borderColor: "#6c2020",
              borderWidth: 3
            },
            {
              label: "Ingresos",
              data: [7, 4, 7, 2, 9, 0, 1, 2, 4, 7, 7, 10],
              backgroundColor: "rgba(122, 171, 255, .5)",
              borderColor: "#405985",
              borderWidth: 3
            }
          ]
        },

        //Objeto de opciones en donde hay ajustes misceláneos como el estilo de las líneas o el gráfico en sí
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      }

      export default graficaMovimientos;