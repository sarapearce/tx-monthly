(function($) {
	"use strict";
	$(function() {
		$(document).ready(function() {
			$.ajax({
				url: "https://api.parsely.com/v2/analytics/posts?apikey=texasmonthly.com&secret=J44znyy0vsL7tsYzacxIjtVZhQA4uT8kQqN2ZK72Sko&page=1&limit=10&sort=views&period_start=2d",
				success: function(result) {

					var container = $('.data-container');

					container.append($('<div />', {
						class: 'header',
						text: "div",
						html: 'TITLE',
					}));

					container.append($('<div />', {
						class: 'header',
						text: "div",
						html: 'AUTHOR',
					}));

					container.append($('<div />', {
						class: 'header',
						text: "div",
						html: 'VIEW COUNT',
					}));

					$.each(result.data, function(key, data) {
						//list the title
						container.append($('<div />', {
							class: 'title item',
							text: "div",
							html: data.title,
						}));
						//list the author
						container.append($('<div />', {
							class: 'author item',
							text: "div",
							html: data.author,
						}));
						// list the hit count
						container.append($('<div />', {
							class: 'hits item',
							text: "div",
							html: data._hits,
						}));
					});
				}
			});
		});
	});
}(jQuery));
