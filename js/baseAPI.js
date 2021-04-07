export class baseAPI { // Xuất ra class thao tác với API
    url = "http://localhost:3000"; // Địa chỉ mặc định của url

    // Phương thức get dữ liệu của class 
    get(endPoint) {
        return axios({
            method: 'GET',
            url: `${this.url}/${endPoint}`
        });
    }

    // Phương thức get 1 dữ liệu bằng Id của class
    getById(endPoint, id) {
        return axios({
            method: 'GET',
            url: `${this.url}/${endPoint}/${id}`
        });
    }

    // Phương thức get sản phẩm theo Id
    getAllByOne(endPoint, id, product) {
        return axios({
            method: 'GET',
            url: `${this.url}/${endPoint}/${id}/${product}`
        })
    }

    // Phương thức thêm dữ liệu của class
    post(endPoint, data) {
        return axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: data,
            url: `${this.url}/${endPoint}`
        })
    };

    // Phương thức sửa dữ liệu theo Id của class
    patch(endPoint, id, data) {
        return axios({
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            url: `${this.url}/${endPoint}/${id}`
        })
    }

    // Phương thức xóa dữ liệu theo Id
    delete(endPoint, id) {
        return axios({
            method: 'DELETE',
            url: `${this.url}/${endPoint}/${id}`
        })
    }

    // Phương thức phân trang
    paginate(endPoint, page, limit) {
        return axios({
            method: 'GET',
            url: `${this.url}/${endPoint}?_page=${page}&_limit=${limit}`
        });
    }
}

// axios({
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     data: {"name": "huy"},
//     url: `http://localhost:3000/products`
// })

