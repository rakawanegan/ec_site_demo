// 商品情報
const prices = {
    coffee: 480,
    tea: 280,
    milk: 180,
    coke: 190,
    beer: 580,
  };
  
  // 初期化
  let counts = { coffee: 0, tea: 0, milk: 0, coke: 0, beer: 0 };
  let totalCount = 0;
  let totalPrice = 0;
  
  // 各ボタンのクリックイベントを設定
  document.getElementById("coffee").addEventListener("click", () => updateOrder("coffee"));
  document.getElementById("tea").addEventListener("click", () => updateOrder("tea"));
  document.getElementById("milk").addEventListener("click", () => updateOrder("milk"));
  document.getElementById("coke").addEventListener("click", () => updateOrder("coke"));
  document.getElementById("beer").addEventListener("click", () => updateOrder("beer"));
  
  // 注文情報を更新する関数
  function updateOrder(drink) {
    // 商品ごとのカウントを増加
    counts[drink]++;
    document.getElementById(`${drink}-count`).textContent = counts[drink];
  
    // 合計商品数と合計金額を更新
    totalCount++;
    totalPrice += prices[drink];
  
    document.getElementById("count").textContent = totalCount;
    document.getElementById("price").textContent = totalPrice;
  }
  