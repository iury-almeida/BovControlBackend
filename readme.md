To start the api you'll need to create a '.env' file in the root directory, then you'll use 2 variables. 
The first one is the 'APIPORT' containing the api port you want it to listen to, the second one is the 'CONNECTIONSTRING' containing the connection string to mongodb. Down below there's an exemple of the file.

After that, create the database on mongodb, and a collection called 'animals'.

Go to the terminal and type 'npm i' to install the api dependencies and then 'node app'. Great, the api is running. ;)

Use the 'bodyExemple' file to da a request to the api using the routes available.

------------------------------------------------------------------------------------------------------------------------------

Para inicializar a api você precisará criar o arquivo '.env' na raiz do diretorio, serão usadas duas variáveis neste arquivo.
A primeira é a 'APIPORT' contendo a porta que você deseja que a api escute, a segunda é a 'CONNECTIONSTRING' contendo a string de conexão com o mongodb. Segue abaixo um exemplo do arquivo.

Depois disso crie um banco no mongodb, e uma collection chamada 'animals'.

Vá para o terminal e digite 'npm i' para instalar as dependencias da api e depois 'node app'. Pronto, a api está escutando. ;)

Use o arquivo 'bodyExemple' para fazer uma requisição para a api de acordo com as rotas.

.env

APIPORT=3001
CONNECTIONSTRING=mongodb://user:password@host:27017/database