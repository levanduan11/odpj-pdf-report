var data = {
  no: 1,
  contract_date_and_time: ['YYYY/MM/DD', 'hh:mm:dd'],
  transaction_method: ['募集', '取引'],
  market: '大阪EX',
  product_type: ['デジタル', '債券'],
  trading_name: ['＊＊＊＊＊ファンド', '［JP********］'],
  buy_sell: '買',
  account_division: '特定',
  amount: '＊＊＊',
  contract_price: '＊＊＊',
  commission: ['＊', '［＊］'],
  delivery_price: '＊＊＊',
  delivery_date: 'YYYY/MM/DD',
  remarks: '****'
};

var object = {
  head: [
    {
      child: 'no',
      className: ['tac']
    },
    {
      child: '約定日時',
      className: ['tac']
    },
    {
      child: ['取引', '方式'],
      className: ['tac']
    },
    {
      child: ['市場・', '相手方'],
      className: ['tac']
    },
    {
      child: ['商品', '種類'],
      className: ['tac']
    },
    {
      child: ['銘柄名', '［銘柄コード］'],
      className: ['tac']
    },
    {
      child: ['売買', '区分'],
      className: ['tac']
    },
    {
      child: ['口座', '区分'],
      className: ['tac']
    },
    {
      child: ['約定数量', '（口）'],
      className: ['tac']
    },
    {
      child: ['約定価格', '（円）'],
      className: ['tac']
    },
    {
      child: ['手数料', '［消費税］','（円）'],
      className: ['tac']
    },
     {
      child: ['受渡代金', '（円）'],
      className: ['tac']
    },
    {
      child: '受渡日',
      className: ['tac']
    },
     {
      child: '備考',
      className: ['tac']
    },

  ],
  body: fake(),
}
