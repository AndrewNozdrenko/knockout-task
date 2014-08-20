function listLiterature(id, name){
	var self = this;
	self.id = ko.observable(id);
	self.name = ko.observable(name);
	self.selected = ko.observable(false);
}

function viewModel(){
	var self = this;
	self.email = ko.observable("");
	self.topic = ko.observable("");
	self.text = ko.observable("");

	self.fullEmail = ko.computed(function(){
		return "email  " + this.email();
	}, this);
	self.fullTopic = ko.computed(function(){
		return "тема  " + this.topic();
	}, this);
	self.fullText = ko.computed(function(){
		return "текст  " + this.text();
	}, this);

	self.detailsEnabled = ko.observable(false),
		this.enableDetails = function(){
			this.detailsEnabled(true);
		},
		this.disableDetails = function(){
			this.detailsEnabled(false);
		}

	self.toggle = function(item){
		item.selected(!(item.selected()));
		return true;
	};

	self.arrayId = ko.observableArray();
	self.availableBooks = ko.observableArray([
		new listLiterature(1, "kompanii"),
		new listLiterature(2, "O kompanii"),
		new listLiterature(3, "Description"),
		new listLiterature(4, "Description solution")
	]);
}

ko.applyBindings(new viewModel());

