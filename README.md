# README

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

| Column  | Type       | Options      |
| --------| ---------- | ------------ |
| food    | text       | null: false  |
| calorie | integer    | null: false  |
| protein | integer    |              |
| fat     | integer    |              |
| carbo   | integer    |              |
| text    | text       |              |

### Association

- belongs_to :user

## Calculationsテーブル

| Column            | Type        | Options      |
| ----------------- | ----------- | ------------ |
| weight            | integer     | null: false  |
| calorie           | integer     | null: false  |
| protein           | integer     |              |
| fat               | integer     |              |
| carbo             | integer     |              |
| bodyfatpercentage | integer     |              |
| user              | referrences |              |

### Association

- belongs_to :user