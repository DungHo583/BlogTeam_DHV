<template>
  <div class="table-admin-custom">
    <table class="table-custom">
      <!--  -->
      <thead class="header-table-custom">
        <th class="col-number">STT</th>
        <th
          v-for="(header, idx) in header"
          :key="idx"
          :style="'width:' + header.width + ';' + 'text-align:' + header.align"
        >
          {{ header.name }}
        </th>
        <th class="col-action">Thao tác</th>
      </thead>
      <!--  -->
      <tbody class="body-table-custom">
        <!--  -->
        <tr v-for="(item, idx) in content" :key="idx">
          <td class="col-number">{{ idx + 1 }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.short_desc }}</td>
          <td align="center">
            <!-- {{ Number(item.created_at) | formatDate("dd/mm/yyyy hh:MM") }} -->
            {{ item.created_at | formatDate("dd/mm/yyyy hh:MM") }}
          </td>
          <td class="col-action">
            <div class="action-table">
              <button class="btn-custom btn-edit" @click="handleEdit(item._id)">
                <a-icon type="edit" /> Sửa
              </button>
              <button class="btn-custom btn-del" @click="handleDel(item._id)">
                <a-icon type="delete" /> Xóa
              </button>
            </div>
          </td>
        </tr>
        <!--  -->
      </tbody>
      <!--  -->
    </table>
  </div>
</template>

<script>
export default {
  props: {
    header: Array,
    content: Array,
  },
  data() {
    return {
      headerTable: [],
      bodyTable: [],
    };
  },
  watch: {},
  methods: {
    handleEdit(event) {
      this.$router.push({ path: "/admin/category/update/" + event });
    },

    handleDel(event) {
      console.log("event", event);
    },
  },
};
</script>

<style lang="less" scoped>
.table-admin-custom {
  width: 100%;
  .table-custom {
    width: 100%;
    .header-table-custom {
      width: 100%;
      th {
        padding: 20px 0;
      }
      th:last-child {
        text-align: center;
      }
    }
    .body-table-custom {
      width: 100%;
      tr {
        transition: all 0.3s ease;
        border-top: 1px solid #222a4233;
        td {
          padding: 15px 0;
        }
        td:last-child {
          padding: 5px 0;
          text-align: center;
        }
      }
      tr:hover {
        background: #fafafa;
      }
      //   tr:last-child {
      //     border-bottom: 1px solid #fff;
      //   }
    }
  }
}

//
.btn-custom {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #419ef9e0;
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;
  .anticon {
    margin-right: 5px;
  }
}
.btn-del {
  background: #ff0000e0 !important;
  margin-left: 5px;
}
.btn-del:hover {
  background: #ff0000 !important;
}

.btn-custom:hover {
  background: #419ef9;
}

.col-action {
  width: 100px;
}
.col-number {
  width: 30px;
  text-align: center;
}
</style>