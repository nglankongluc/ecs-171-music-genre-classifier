
results = CSVInterface.getSong(title='Song Title From Front End')

# ANN_result.py
result = {
  # data team
	'song_id' : <int>,
	'title': 'Song Title From Front End',

	## add more info like year or record label
	'metadata': {  # for front end team
		'artist': str()
	},

	## get data for ml prediction
	'subset': str(), # small, medium, full...
	'X': [[]], # the features for the song with matching title, use pd.DataFrame.values
	'top_genre':  str(), # from tracks.csv

	# the result of the ml team's prediction
	# ml team interface
	'prediction': {
		'threshold': int(0) # build a list of threshold length to guarantee it will contain the answer
		'genres': {  # list of 16 of genre probabilities sorted by most likely to least likely
		}
		'score': int(0) # position the actual top_genre is in the list of  prediction.genres
	}

	# back end team
	'error': '' # init to empty string. front end team will have to handle: error, 1 result, more than 1 results.
}
