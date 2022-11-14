var data = {
  no: 1,
  trading_name:'＊＊＊＊＊ファンド',
  stock_code: '［JP********］',
  quantity: '＊＊＊',
  date_of_acquisition: 'YYYY/MM/DD',
  acquisition_cost: '********',
  pay_out_date: 'YYYY/MM/DD',
  remarks: '****'
};

var object = {
  head: [
    {
      child: 'no',
      className: ['tac']
    },
    {
      child: ['銘柄名', '［銘柄コード］'],
      className: ['tac']
    },
    {
      child: '銘柄コード',
      className: ['tac']
    },
    {
      child: ['数量', '（口）'],
      className: ['tac']
    },
    {
      child: '取得日',
      className: ['tac']
    },
    {
      child: ['取得価額', '（円）'],
      className: ['tac']
    },
 
     {
      child: ['払出日', '（円）'],
      className: ['tac']
    },
     {
      child: '備考',
      className: ['tac']
    },

  ],
  body: fake(),
}
