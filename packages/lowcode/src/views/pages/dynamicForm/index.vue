<template>
  <div class="dynamic-form-container layout-pd">
    <el-card shadow="hover" header="动态复杂表单">
      <el-form
        ref="formRulesOneRef"
        :model="state.form"
        size="default"
        label-width="100px"
        class="mt35"
      >
        <el-row :gutter="35">
          <el-col
            v-for="(val, key) in formData"
            v-show="val.isShow"
            :key="key"
            :xs="val.xs"
            :sm="val.sm"
            :md="val.md"
            :lg="val.md"
            :xl="val.xl"
            class="mb20"
          >
            <template v-if="val.type !== ''">
              <el-form-item
                v-if="val.type !== ''"
                :label="val.label"
                :prop="val.prop"
                :rules="[
                  {
                    required: val.required,
                    message: `${val.label}不能为空`,
                    trigger: val.type === 'input' ? 'blur' : 'change',
                  },
                ]"
              >
                <el-input
                  v-if="val.type === 'input'"
                  v-model="state.form[val.prop]"
                  :placeholder="val.placeholder"
                  clearable
                  style="width: 100%"
                  :disabled="val.disabled"
                />
                <el-date-picker
                  v-else-if="val.type === 'date'"
                  v-model="state.form[val.prop]"
                  type="date"
                  :placeholder="val.placeholder"
                  style="width: 100%"
                  :disabled="val.disabled"
                />
                <el-select
                  v-else-if="val.type === 'select'"
                  v-model="state.form[val.prop]"
                  :placeholder="val.placeholder"
                  style="width: 100%"
                  :disabled="val.disabled"
                >
                  <el-option
                    v-for="item in val.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
                <el-input
                  v-if="val.type === 'textarea'"
                  v-model="state.form[val.prop]"
                  type="textarea"
                  :placeholder="val.placeholder"
                  clearable
                  style="width: 100%"
                  :disabled="val.disabled"
                />
              </el-form-item>
            </template>
            <template v-else>
              <el-row v-for="(v, k) in state.form.list" :key="k" :gutter="35">
                <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" class="mb20">
                  <el-form-item
                    label="年度"
                    :prop="`list[${k}].year`"
                    :rules="[
                      {
                        required: true,
                        message: `年度不能为空`,
                        trigger: 'blur',
                      },
                    ]"
                  >
                    <template #label>
                      <el-button
                        v-if="k === 0"
                        type="primary"
                        circle
                        size="small"
                        @click="onAddRow"
                      >
                        <el-icon>
                          <ele-Plus />
                        </el-icon>
                      </el-button>
                      <el-button
                        v-else
                        type="danger"
                        circle
                        size="small"
                        @click="onDelRow(k)"
                      >
                        <el-icon>
                          <ele-Delete />
                        </el-icon>
                      </el-button>
                      <span class="ml10">年度</span>
                    </template>
                    <el-input
                      v-model="state.form.list[k].year"
                      style="width: 100%"
                      placeholder="请输入"
                    />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" class="mb20">
                  <el-form-item
                    label="月度"
                    :prop="`list[${k}].month`"
                    :rules="[
                      {
                        required: true,
                        message: `月度不能为空`,
                        trigger: 'blur',
                      },
                    ]"
                  >
                    <el-input
                      v-model="state.form.list[k].month"
                      style="width: 100%"
                      placeholder="请输入"
                    />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" class="mb20">
                  <el-form-item
                    label="日度"
                    :prop="`list[${k}].day`"
                    :rules="[
                      {
                        required: true,
                        message: `日度不能为空`,
                        trigger: 'blur',
                      },
                    ]"
                  >
                    <el-input
                      v-model="state.form.list[k].day"
                      style="width: 100%"
                      placeholder="请输入"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </template>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-row class="flex mt15">
      <div class="flex-margin">
        <el-button size="default" @click="onResetForm(formRulesOneRef)">
          <el-icon>
            <ele-RefreshRight />
          </el-icon>
          重置表单
        </el-button>
        <el-button
          size="default"
          type="primary"
          @click="onSubmitForm(formRulesOneRef)"
        >
          <SvgIcon name="iconfont icon-shuxing" />
          验证表单
        </el-button>
      </div>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="pagesDynamicForm">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { formData } from './mock'
import type { FormInstance } from 'element-plus'

// 定义变量内容
const formRulesOneRef = ref<FormInstance>()
const state = reactive({
  formData,
  form: {
    name: '',
    email: '',
    autograph: '',
    occupation: '',
    list: [
      {
        year: '',
        month: '',
        day: '',
      },
    ],
    remarks: '',
  },
})

// 新增行
const onAddRow = () => {
  state.form.list.push({
    year: '',
    month: '',
    day: '',
  })
}
// 删除行
const onDelRow = (k: number) => {
  state.form.list.splice(k, 1)
}
// 表单验证
const onSubmitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success('验证成功')
    } else {
      return false
    }
  })
}
// 重置表单
const onResetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
