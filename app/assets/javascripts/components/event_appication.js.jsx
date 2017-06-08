const EventApplication = React.createClass({
	getInitialState: function(){
		return { events: [] };
	},
	componentDidMount: function(){
		this.getDataFromApi();
	},
	getDataFromApi: function() {
		let self = this;
		$.ajax({
			url: '/api/events',
			success: function(data) {
				self.setState({ events: data});
			},
			error: function(xhr, status, error) {
				alert('Cannot get data from API: ', error)
			}
		});
	},
	handleSearch: function(events) {
    this.setState({ events: events });
  },
  handleAdd: function(event) {
  	let events = this.state.events;
  	events.push(event);
  	this.setState({ events: events });
  },
  handleDeleteRecord: function(event) {
  	let events = this.state.events.slice();
  	let index = events.indexOf(event);
  	events.splice(index, 1);
  	this.setState({ events: events });
  },
  handleUpdateRecord: function(old_event, event) {
  	var events = this.state.events.slice();
  	var index = events.indexOf(old_event);
  	events.splice(index, 1, event);
  	this.setState({ events: events });
  },
	render: function() {
		return(
			<div className="container">
				<div className="jumbotron">
					<h1>React on Rails</h1>
				</div>
				<div className="row">
					<div className="col-md-3">
						<SearchForm handleSearch={this.handleSearch} />
					</div>
					<div className="cold-md-9">
						<NewForm handleAdd={this.handleAdd} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<EventTable events={this.state.events}
												handleDeleteRecord={this.handleDeleteRecord}
												handleUpdateRecord={this.handleUpdateRecord} />
					</div>
				</div>
			</div>
		)
	}
});
