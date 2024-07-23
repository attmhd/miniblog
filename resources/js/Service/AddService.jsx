export function AddService(e, url, data, setData, dataField) {
    e.preventDefault();
    router.post(url, data);
    setData({
        dataField,
    });

    return;
}
