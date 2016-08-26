
Rails.application.config.assets.version = '1.0'

#CSS
Rails.application.config.assets.precompile += %w( bootstrap.min.css )
Rails.application.config.assets.precompile += %w( application.css )
Rails.application.config.assets.precompile += %w( sd.css )
Rails.application.config.assets.precompile += %w( hd.css )
Rails.application.config.assets.precompile += %w( fontawesome.css )
Rails.application.config.assets.precompile += %w( tablette.css )
Rails.application.config.assets.precompile += %w( mobile.css )

#JS
Rails.application.config.assets.precompile += %w( bootstrap.min.js )