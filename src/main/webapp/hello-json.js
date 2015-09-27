$undertow
    .onGet("/hello/json",
        {headers: {"content-type": "application/json"}},
        [function ($exchange) {
            return {message: 'Hello World'};
        }])