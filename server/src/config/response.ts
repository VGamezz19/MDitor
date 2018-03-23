interface ResponseServer {
    status: "OK" | "KO";
    data?: String;
    error?: String;
}

function success(data?: any) {

    const res: ResponseServer = { status: "OK" };

    if (data) res.data = data;

    return res;
}

function fail(error?: any) {

    const res: ResponseServer = { status: "KO" };

    if (error) res.error = error;

    return res;
}

export { success, fail };