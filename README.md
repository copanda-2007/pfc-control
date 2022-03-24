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
[![Image from Gyazo](https://i.gyazo.com/d775dd09f44950a0594bb8289beca74e.png)](https://gyazo.com/d775dd09f44950a0594bb8289beca74e)


# 画面遷移図
[![Image from Gyazo](https://i.gyazo.com/a8ce90376cf21716ceb822983a383509.png)](https://gyazo.com/a8ce90376cf21716ceb822983a383509)

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