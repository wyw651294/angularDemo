import { Component } from '@angular/core';

@Component({
    selector: 'app-movie',
    templateUrl: 'movie.page.html',
    styleUrls: ['movie.page.scss']
})
export class MoviePage {

    movieList = new Array();

    ngOnInit() {
        this.getMovieList();
    }

    getMovieList() {
        this.movieList = [
            { Name: "少林足球", Director: "周星驰", Year: "2008", Genre: "喜剧", Notes: "穷苦潦倒却心怀功夫的星自创少林足球队，并取得成功的故事" },
            { Name: "少林足球", Director: "周星驰", Year: "2008", Genre: "喜剧", Notes: "穷苦潦倒却心怀功夫的星自创少林足球队，并取得成功的故事" },
            { Name: "少林足球", Director: "周星驰", Year: "2008", Genre: "喜剧", Notes: "穷苦潦倒却心怀功夫的星自创少林足球队，并取得成功的故事" },
            { Name: "少林足球", Director: "周星驰", Year: "2008", Genre: "喜剧", Notes: "穷苦潦倒却心怀功夫的星自创少林足球队，并取得成功的故事" },
            { Name: "少林足球", Director: "周星驰", Year: "2008", Genre: "喜剧", Notes: "穷苦潦倒却心怀功夫的星自创少林足球队，并取得成功的故事" },
            { Name: "少林足球", Director: "周星驰", Year: "2008", Genre: "喜剧", Notes: "穷苦潦倒却心怀功夫的星自创少林足球队，并取得成功的故事" },
            { Name: "少林足球", Director: "周星驰", Year: "2008", Genre: "喜剧", Notes: "穷苦潦倒却心怀功夫的星自创少林足球队，并取得成功的故事" },
            { Name: "少林足球", Director: "周星驰", Year: "2008", Genre: "喜剧", Notes: "穷苦潦倒却心怀功夫的星自创少林足球队，并取得成功的故事" },
        ];
    }
}
