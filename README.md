# アプリケーション名
PANDA(仮)

# アプリケーション概要
最初に体重、体脂肪率を入力し、一日のカロリー、タンパク質、脂質、炭水化物の目標値を登録します。
その後、毎日の食事記録をつけることで、目標値に沿った食事ができているかを管理できます。

#### URL
https://pfc-control.herokuapp.com/

# テスト用アカウント
メールアドレス：test.com
パスワード：Test01

# 利用方法
1:トップページのヘッダーから新規登録ボタンをクリックし、ユーザ新規登録を行う
2:ログイン完了後、トップページの自動カロリー計算のアカウント名をクリックし体重、体脂肪率を入力し登録をクリックする。
3:トップページの右下にある記録するボタンから食事記録を付ける

# アプリケーションを作成した背景
私自身「ダイエットが持続しない」という悩みを抱えていた経験から、
「ダイエットを継続して成功体験をしたい」と思い、同じような悩みを抱える方へ向けてアプリを開発しました。

# 洗い出した要件
[要件定義シート](https://docs.google.com/spreadsheets/d/1PtP7m2zECyuQN5gbCO_aVlgZjXDk-HihEJQI1L-eNro/edit?usp=sharing)

# 実装予定の機能
トップページ上でグラフを表示させる
食事記録をカレンダーで管理

#　データベース設計
%3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20value%3D%22users%22%20style%3D%22swimlane%3BfontStyle%3D0%3BchildLayout%3DstackLayout%3Bhorizontal%3D1%3BstartSize%3D26%3BhorizontalStack%3D0%3BresizeParent%3D1%3BresizeParentMax%3D0%3BresizeLast%3D0%3Bcollapsible%3D1%3BmarginBottom%3D0%3Balign%3Dcenter%3BfontSize%3D14%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstrokeColor%3Ddefault%3BfillColor%3Ddefault%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22131%22%20y%3D%2280%22%20width%3D%22160%22%20height%3D%22116%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%223%22%20value%3D%22nickname%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%222%22%3E%3CmxGeometry%20y%3D%2226%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%224%22%20value%3D%22email%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%222%22%3E%3CmxGeometry%20y%3D%2256%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%225%22%20value%3D%22encrypted_password%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%222%22%3E%3CmxGeometry%20y%3D%2286%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%226%22%20value%3D%22dietrecords%22%20style%3D%22swimlane%3BfontStyle%3D0%3BchildLayout%3DstackLayout%3Bhorizontal%3D1%3BstartSize%3D26%3BhorizontalStack%3D0%3BresizeParent%3D1%3BresizeParentMax%3D0%3BresizeLast%3D0%3Bcollapsible%3D1%3BmarginBottom%3D0%3Balign%3Dcenter%3BfontSize%3D14%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstrokeColor%3Ddefault%3BfillColor%3Ddefault%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22513%22%20y%3D%2233%22%20width%3D%22160%22%20height%3D%22206%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%227%22%20value%3D%22food%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%226%22%3E%3CmxGeometry%20y%3D%2226%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%228%22%20value%3D%22calorie%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%226%22%3E%3CmxGeometry%20y%3D%2256%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%229%22%20value%3D%22protein%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%226%22%3E%3CmxGeometry%20y%3D%2286%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2210%22%20value%3D%22fat%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%226%22%3E%3CmxGeometry%20y%3D%22116%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2211%22%20value%3D%22carbo%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%226%22%3E%3CmxGeometry%20y%3D%22146%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2212%22%20value%3D%22user%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%226%22%3E%3CmxGeometry%20y%3D%22176%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2213%22%20style%3D%22edgeStyle%3Dnone%3Bhtml%3D1%3BexitX%3D0%3BexitY%3D0.5%3BexitDx%3D0%3BexitDy%3D0%3BfontFamily%3DHelvetica%3BfontSize%3D12%3BfontColor%3Ddefault%3BstartSize%3D15%3BendArrow%3DERone%3BendFill%3D0%3BstartArrow%3DERoneToMany%3BstartFill%3D0%3BendSize%3D15%3BsourcePerimeterSpacing%3D15%3BtargetPerimeterSpacing%3D15%3B%22%20edge%3D%221%22%20source%3D%2210%22%20parent%3D%221%22%3E%3CmxGeometry%20relative%3D%221%22%20as%3D%22geometry%22%3E%3CmxPoint%20x%3D%22293%22%20y%3D%22164%22%20as%3D%22targetPoint%22%2F%3E%3CArray%20as%3D%22points%22%3E%3CmxPoint%20x%3D%22360%22%20y%3D%22164%22%2F%3E%3C%2FArray%3E%3C%2FmxGeometry%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2214%22%20value%3D%22Calculations%22%20style%3D%22swimlane%3BfontStyle%3D0%3BchildLayout%3DstackLayout%3Bhorizontal%3D1%3BstartSize%3D26%3BhorizontalStack%3D0%3BresizeParent%3D1%3BresizeParentMax%3D0%3BresizeLast%3D0%3Bcollapsible%3D1%3BmarginBottom%3D0%3Balign%3Dcenter%3BfontSize%3D14%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstrokeColor%3Ddefault%3BfillColor%3Ddefault%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22131%22%20y%3D%22310%22%20width%3D%22160%22%20height%3D%22236%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2215%22%20value%3D%22weight%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%2214%22%3E%3CmxGeometry%20y%3D%2226%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2216%22%20value%3D%22calorie%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%2214%22%3E%3CmxGeometry%20y%3D%2256%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2217%22%20value%3D%22protein%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%2214%22%3E%3CmxGeometry%20y%3D%2286%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2218%22%20value%3D%22fat%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%2214%22%3E%3CmxGeometry%20y%3D%22116%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2219%22%20value%3D%22carbo%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%2214%22%3E%3CmxGeometry%20y%3D%22146%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2220%22%20value%3D%22bodyfatpercentage%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%2214%22%3E%3CmxGeometry%20y%3D%22176%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2221%22%20value%3D%22user%22%20style%3D%22text%3BstrokeColor%3Dnone%3BfillColor%3Dnone%3BspacingLeft%3D4%3BspacingRight%3D4%3Boverflow%3Dhidden%3Brotatable%3D0%3Bpoints%3D%5B%5B0%2C0.5%5D%2C%5B1%2C0.5%5D%5D%3BportConstraint%3Deastwest%3BfontSize%3D12%3BfontFamily%3DHelvetica%3BfontColor%3Ddefault%3BstartSize%3D30%3B%22%20vertex%3D%221%22%20parent%3D%2214%22%3E%3CmxGeometry%20y%3D%22206%22%20width%3D%22160%22%20height%3D%2230%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2222%22%20style%3D%22edgeStyle%3Dnone%3Bhtml%3D1%3BentryX%3D0.481%3BentryY%3D1.033%3BentryDx%3D0%3BentryDy%3D0%3BentryPerimeter%3D0%3BfontFamily%3DHelvetica%3BfontSize%3D12%3BfontColor%3Ddefault%3BstartArrow%3DERone%3BstartFill%3D0%3BendArrow%3DERone%3BendFill%3D0%3BstartSize%3D15%3BendSize%3D15%3BsourcePerimeterSpacing%3D15%3BtargetPerimeterSpacing%3D15%3BstrokeWidth%3D1%3BexitX%3D0.5%3BexitY%3D0%3BexitDx%3D0%3BexitDy%3D0%3B%22%20edge%3D%221%22%20source%3D%2214%22%20target%3D%225%22%20parent%3D%221%22%3E%3CmxGeometry%20relative%3D%221%22%20as%3D%22geometry%22%3E%3CmxPoint%20x%3D%22208%22%20y%3D%22300%22%20as%3D%22sourcePoint%22%2F%3E%3CmxPoint%20x%3D%22212.46%22%20y%3D%22196%22%20as%3D%22targetPoint%22%2F%3E%3C%2FmxGeometry%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3E


# 画面遷移図
%3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20style%3D%22edgeStyle%3Dnone%3Bhtml%3D1%3B%22%20edge%3D%221%22%20source%3D%223%22%20target%3D%224%22%20parent%3D%221%22%3E%3CmxGeometry%20relative%3D%221%22%20as%3D%22geometry%22%3E%3CmxPoint%20x%3D%22290%22%20y%3D%22110%22%20as%3D%22targetPoint%22%2F%3E%3CArray%20as%3D%22points%22%3E%3CmxPoint%20x%3D%22240%22%20y%3D%22110%22%2F%3E%3C%2FArray%3E%3C%2FmxGeometry%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%223%22%20value%3D%22%E3%83%88%E3%83%83%E3%83%97%E3%83%9A%E3%83%BC%E3%82%B8%22%20style%3D%22rounded%3D0%3BwhiteSpace%3Dwrap%3Bhtml%3D1%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%2280%22%20y%3D%2280%22%20width%3D%22120%22%20height%3D%2260%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%224%22%20value%3D%22%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8%22%20style%3D%22rounded%3D0%3BwhiteSpace%3Dwrap%3Bhtml%3D1%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22281%22%20y%3D%2280%22%20width%3D%22139%22%20height%3D%2260%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%225%22%20value%3D%22%E3%83%A6%E3%83%BC%E3%82%B6%E6%96%B0%E8%A6%8F%E7%99%BB%E9%8C%B2%E3%83%9A%E3%83%BC%E3%82%B8%22%20style%3D%22rounded%3D0%3BwhiteSpace%3Dwrap%3Bhtml%3D1%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22281%22%20y%3D%22180%22%20width%3D%22139%22%20height%3D%2260%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%226%22%20value%3D%22%E8%87%AA%E5%8B%95%E8%A8%88%E7%AE%97%E5%85%A5%E5%8A%9B%E3%83%9A%E3%83%BC%E3%82%B8%22%20style%3D%22rounded%3D0%3BwhiteSpace%3Dwrap%3Bhtml%3D1%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22281%22%20y%3D%22280%22%20width%3D%22139%22%20height%3D%2260%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%227%22%20value%3D%22%E9%A3%9F%E4%BA%8B%E8%A8%98%E9%8C%B2%E3%83%9A%E3%83%BC%E3%82%B8%22%20style%3D%22rounded%3D0%3BwhiteSpace%3Dwrap%3Bhtml%3D1%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22281%22%20y%3D%22370%22%20width%3D%22139%22%20height%3D%2260%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%228%22%20value%3D%22%22%20style%3D%22endArrow%3Dclassic%3Bhtml%3D1%3Brounded%3D0%3BedgeStyle%3DorthogonalEdgeStyle%3B%22%20edge%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20width%3D%2250%22%20height%3D%2250%22%20relative%3D%221%22%20as%3D%22geometry%22%3E%3CmxPoint%20x%3D%22241%22%20y%3D%22110%22%20as%3D%22sourcePoint%22%2F%3E%3CmxPoint%20x%3D%22281%22%20y%3D%22210%22%20as%3D%22targetPoint%22%2F%3E%3CArray%20as%3D%22points%22%3E%3CmxPoint%20x%3D%22241%22%20y%3D%22210%22%2F%3E%3C%2FArray%3E%3C%2FmxGeometry%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%229%22%20value%3D%22%22%20style%3D%22endArrow%3Dclassic%3Bhtml%3D1%3Brounded%3D0%3BedgeStyle%3DorthogonalEdgeStyle%3B%22%20edge%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20width%3D%2250%22%20height%3D%2250%22%20relative%3D%221%22%20as%3D%22geometry%22%3E%3CmxPoint%20x%3D%22241%22%20y%3D%22210%22%20as%3D%22sourcePoint%22%2F%3E%3CmxPoint%20x%3D%22281%22%20y%3D%22310%22%20as%3D%22targetPoint%22%2F%3E%3CArray%20as%3D%22points%22%3E%3CmxPoint%20x%3D%22241%22%20y%3D%22310%22%2F%3E%3C%2FArray%3E%3C%2FmxGeometry%3E%3C%2FmxCell%3E%3CmxCell%20id%3D%2210%22%20value%3D%22%22%20style%3D%22endArrow%3Dclassic%3Bhtml%3D1%3Brounded%3D0%3BedgeStyle%3DorthogonalEdgeStyle%3B%22%20edge%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20width%3D%2250%22%20height%3D%2250%22%20relative%3D%221%22%20as%3D%22geometry%22%3E%3CmxPoint%20x%3D%22241%22%20y%3D%22310%22%20as%3D%22sourcePoint%22%2F%3E%3CmxPoint%20x%3D%22281%22%20y%3D%22410%22%20as%3D%22targetPoint%22%2F%3E%3CArray%20as%3D%22points%22%3E%3CmxPoint%20x%3D%22241%22%20y%3D%22410%22%2F%3E%3C%2FArray%3E%3C%2FmxGeometry%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3E

# 開発環境
#### フロントサイド
- HTML
- CSS
- Java Script
- jQuery

#### バックエンド
- Ruby
- Ruby on Rails

# ローカルでの動作方法
以下のコマンドを順に実行
% git clone https://github.com/copanda-2007/pfc-control.git
% cd pfc-control
% bundle install
% yarn install

# テーブル設計

## users テーブル

| Column             | Type   | Options                  |
| ------------------ | ------ | ------------------------ |
| nickname           | string | null: false              |
| email              | string | null: false,unique: true |
| encrypted_password | string | null: false              |

### Association

- has_many :dietrecords
- has_one :calculation

## dietrecordsテーブル

| Column  | Type        | Options           |
| --------| ----------- | ----------------- |
| food    | text        | null: false       |
| calorie | integer     | null: false       |
| protein | integer     |                   |
| fat     | integer     |                   |
| carbo   | integer     |                   |
| text    | text        |                   |
| user    | referrences | foreign_key: true |

### Association

- belongs_to :user

## Calculationsテーブル

| Column            | Type        | Options           |
| ----------------- | ----------- | ----------------  |
| weight            | integer     | null: false       |
| calorie           | integer     | null: false       |
| protein           | integer     |                   |
| fat               | integer     |                   |
| carbo             | integer     |                   |
| bodyfatpercentage | integer     |                   |
| user              | referrences | foreign_key: true |
### Association

- belongs_to :user