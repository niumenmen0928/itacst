export default {
    data() {
        return {
            headers: {
                'Authorization': window.sessionStorage.getItem('token')
            },
            content: "请输入商品名称",
            editorOption: {
                // some quill options
            },
            goodL: {},
            active: 0,
            goodlist: [],
            rules: {
                spgoods: [{
                    required: true,
                    message: '请输入商品名称',
                    trigger: 'blur'
                }, ],
                price: [{
                    required: true,
                    message: '请输入商品价格',
                    trigger: 'blur'
                }],
                weight: [{
                    required: true,
                    message: '请输入商品重量',
                    trigger: 'blur'
                }],
                count: [{
                    required: true,
                    message: '请输入商品数量',
                    trigger: 'blur'
                }],
                op: [{
                    required: true,
                    message: '请选择商品分类',
                    trigger: 'blur'
                }],
            },
            good: [],
            props: {
                label: 'cat_name',
                value: 'cat_id'
            },
            fileList2: []
        }
    },
    methods: {
        async categorList() {
            var res = await this.$http.get("/categories?type=3")
            var {
                meta,
                data
            } = res.data
            if (meta.status === 200) {
                this.goodlist = data
            } else {
                this.$message.error(meta.msg)
            }
        },
        tabclick(ev) {
            this.active = Number(ev.index)
            if (this.good.length === 0) {
                this.$message({
                    message: '请选择商品分类',
                    type: 'error'
                })
            }
        }
    },
    mounted() {
        this.categorList()
    },
}