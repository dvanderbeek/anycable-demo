# README

### AnyCable Setup

* brew install anycable-go
* add gems 'anycable-rails', 'redis'
* set up Procfile
* set `config.action_cable.url = "ws://localhost:3334/cable"` in `config/environments/development.rb`
* set adapter to `anycable` in `config/cable.yml`
