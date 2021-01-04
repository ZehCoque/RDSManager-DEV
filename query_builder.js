function query_builder(selector, params) {
    if (selector == 'get_exames') {
        return 'SELECT * from requisições.lista_requisições'
    } else if (selector == 'post_requisição') {
        return 'INSERT INTO `unimed`.`requisições` (`ID`,`Carteira`, `Exames`) VALUES (\'' + params.ID + '\',\'' + params.Carteira + '\', \'' + params.Exames + '\')';
    } else if (selector == 'get_requisição') {
        return 'SELECT * from unimed.requisições'
    } else if (selector == 'update_requisição_status') {
        return 'UPDATE `unimed`.`requisições` SET `Status` = \'' + params.Status + '\' WHERE (`ID` = \'' + params.ID +'\');'
    } else if (selector == 'get_one_exame') {
        return 'SELECT * from unimed.requisições WHERE `ID` = \'' + params.ID + '\''
    }
}

module.exports = query_builder;