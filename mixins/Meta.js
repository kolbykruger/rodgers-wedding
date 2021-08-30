export const Meta = {
    name: 'Meta',
    head() {
        return {
            title: this.title + ' - Jess & Regina 2021',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.description
                }
            ]
        }
    }
}
