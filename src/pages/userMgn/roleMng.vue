<template>
    <div>
        <div style="padding: 20px;border-bottom: solid 1px #ff0000;">
            <el-form ref="form" :model="formData" label-width="100px">
                <el-row :gutter="50">
                    <el-col :span="6">
                        <el-form-item label="角色名称：">
                            <el-input v-model="formData.userName" placeholder="请输入用户名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="权限范围">
                            <el-input v-model="formData.roleName" placeholder="请输入角色名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="创建日期">
                            <el-date-picker style="width:276px" v-model="formData.creatDate" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <div style="float: right;">
                            <el-button type="primary">搜索</el-button>
                            <el-button type="primary">清空</el-button>
                        </div>

                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div style="padding:20px;text-align: left">
            <el-button size="small">新增</el-button>
            <el-button size="small">批量删除</el-button>
        </div>
        <div style="padding:0px 20px 20px 20px;">

            <el-table :data="tableData" max-height="600px" :stripe="true" :border="true" :highlight-current-row="true"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="userName" label="用户名" width="180">
                </el-table-column>
                <el-table-column prop="roleName" label="权限范围" width="180">
                </el-table-column>
                <el-table-column prop="creatDate" label="创建日期">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button type="text" @click="updataUser(scope.row)">修改</el-button>
                        <el-button type="text" @click="checkUser(scope.row)">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination layout="prev, pager, next" :total="10">
            </el-pagination>
        </div>
        <el-dialog title="修改用户" :visible.sync="updataVisible" width="30%" :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="updataVisible = false">取 消</el-button>
                <el-button type="primary" @click="updataVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="查看用户" :visible.sync="checkVisible" width="30%" :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="checkVisible = false">取 消</el-button>
                <el-button type="primary" @click="checkVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            roleName: '',
            updataVisible: false,
            checkVisible: false,
            formData: {
                userName: '',
                roleName: '',
                creatDate: ''
            },
            tableData: [
                {
                    userName: '张三',
                    roleName: '管理员',
                    creatDate: '2020-12-13'
                },
                {
                    userName: '李四',
                    roleName: '管理员',
                    creatDate: '2020-12-13'
                },
                {
                    userName: '王五',
                    roleName: '管理员',
                    creatDate: '2020-12-13'
                },
                {
                    userName: '赵六',
                    roleName: '管理员',
                    creatDate: '2020-12-13'
                }
            ]
        }
    },
    methods: {
        updataUser(row) {
            console.log(row)
            this.updataVisible = true
        },
        checkUser(row) {
            console.log(row)
        },
        handleSelectionChange(row) {
            console.log(row)
        }
    }
}
</script>
<style scoped lang="sass">

</style>