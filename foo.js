// const spans = [
//   {
//     id: "4c4abb30-836c-4b26-88ec-b406824a2cc3",
//     traceId: "c0a76619c77e780a31ecefb3bc69067b",
//     operationName: "Mysql/PreparedStatement/execute",
//     startTime: 1630844521577000000,
//     endTime: 1630844524578000000,
//     parentSpanId: "e9e27c56-c2f4-44a3-91bd-834f409bc27d",
//     timestamp: 0,
//     tags: {
//       application_id: "15",
//       application_name: "apm-demo",
//       cluster_name: "terminus-dev",
//       component: "Mysql",
//       db_instance: "mysql",
//       db_statement: "SELECT SLEEP(?);",
//       db_type: "Mysql",
//       host: "mysql-master.group-addon-mysql--w525151b176404e549e876ac3ccf10676.svc.cluster.local:3306",
//       host_ip: "10.0.6.219",
//       operation_name: "Mysql/PreparedStatement/execute",
//       org_id: "2",
//       org_name: "terminus",
//       parent_span_id: "e9e27c56-c2f4-44a3-91bd-834f409bc27d",
//       peer_hostname: "mysql-master.group-addon-mysql--w525151b176404e549e876ac3ccf10676.svc.cluster.local:3306",
//       project_id: "13",
//       project_name: "apm-demo-testwushan",
//       runtime_id: "9",
//       runtime_name: "feature/simple",
//       service_id: "15_feature/simple_apm-demo-api",
//       service_name: "apm-demo-api",
//       span_id: "4c4abb30-836c-4b26-88ec-b406824a2cc3",
//       span_kind: "client",
//       span_layer: "db",
//       terminus_key: "58ee69adccbb4a42a638b2de6b8eac7c",
//       trace_id: "c0a76619c77e780a31ecefb3bc69067b",
//       workspace: "DEV",
//     },
//     duration: 3001000000,
//     selfDuration: 3001000000,
//   },
//   {
//     id: "e9e27c56-c2f4-44a3-91bd-834f409bc27d",
//     traceId: "c0a76619c77e780a31ecefb3bc69067b",
//     operationName: "GET http://apm-demo-api-0418e7149b.project-13-dev.svc.cluster.local:8095/api/mysql/sleep",
//     startTime: 1630844521575000000,
//     endTime: 1630844524579000000,
//     parentSpanId: "40ba5110-e6ef-474d-bced-8da7321c4a9a",
//     timestamp: 0,
//     tags: {
//       application_id: "15",
//       application_name: "apm-demo",
//       cluster_name: "terminus-dev",
//       component: "SpringBoot",
//       host: "apm-demo-api-0418e7149b.project-13-dev.svc.cluster.local:8095",
//       host_ip: "10.0.6.219",
//       http_method: "GET",
//       http_path: "/api/mysql/sleep",
//       http_status_code: "200",
//       http_url: "http://apm-demo-api-0418e7149b.project-13-dev.svc.cluster.local:8095/api/mysql/sleep",
//       operation_name: "GET http://apm-demo-api-0418e7149b.project-13-dev.svc.cluster.local:8095/api/mysql/sleep",
//       org_id: "2",
//       org_name: "terminus",
//       parent_span_id: "40ba5110-e6ef-474d-bced-8da7321c4a9a",
//       project_id: "13",
//       project_name: "apm-demo-testwushan",
//       runtime_id: "9",
//       runtime_name: "feature/simple",
//       service_id: "15_feature/simple_apm-demo-api",
//       service_name: "apm-demo-api",
//       span_id: "e9e27c56-c2f4-44a3-91bd-834f409bc27d",
//       span_kind: "server",
//       span_layer: "http",
//       terminus_key: "58ee69adccbb4a42a638b2de6b8eac7c",
//       trace_id: "c0a76619c77e780a31ecefb3bc69067b",
//       workspace: "DEV",
//     },
//     duration: 3004000000,
//     selfDuration: 3000000,
//   },
//   {
//     id: "40ba5110-e6ef-474d-bced-8da7321c4a9a",
//     traceId: "c0a76619c77e780a31ecefb3bc69067b",
//     operationName: "server /api/mysql/sleep?seconds=3",
//     startTime: 1630844521569000000,
//     endTime: 1630844524580000000,
//     parentSpanId: "3554d375-e9f7-43ea-8389-95930f41c879",
//     timestamp: 0,
//     tags: {
//       application_id: "15",
//       application_name: "apm-demo",
//       cluster_name: "terminus-dev",
//       component: "NodeJs",
//       host: "telegraf-app-00e2f41199-shfs7",
//       host_ip: "10.0.6.216",
//       http_method: "GET",
//       http_path: "apm-demo-ui-dev.dev.terminus.io/api/mysql/sleep?seconds=3",
//       http_status_code: "200",
//       http_url: "http://apm-demo-api-0418e7149b.project-13-dev.svc.cluster.local:8095/api/mysql/sleep?seconds=3",
//       instance_id: "78ceeed3-6f35-4f21-9e63-bf9c447aeea1",
//       operation_name: "server /api/mysql/sleep?seconds=3",
//       org_id: "2",
//       org_name: "erda",
//       parent_span_id: "3554d375-e9f7-43ea-8389-95930f41c879",
//       peer_hostname: "undefined",
//       peer_port: "8095",
//       project_id: "13",
//       project_name: "apm-demo-testwushan",
//       runtime_id: "9",
//       runtime_name: "feature/simple",
//       service_id: "15_feature/simple_apm-demo-ui",
//       service_instance_id: "78ceeed3-6f35-4f21-9e63-bf9c447aeea1",
//       service_ip: "10.112.0.7",
//       service_name: "apm-demo-ui",
//       "source-addon-id": "ApiGateway",
//       "source-addon-type": "ApiGateway",
//       source_application_id: "15",
//       source_application_name: "apm-demo",
//       source_instance_id: "78ceeed3-6f35-4f21-9e63-bf9c447aeea1",
//       source_org_id: "2",
//       source_project_id: "13",
//       source_project_name: "apm-demo-testwushan",
//       source_runtime_id: "9",
//       source_runtime_name: "feature/simple",
//       source_service_id: "15_feature/simple_apm-demo-ui",
//       source_service_name: "apm-demo-ui",
//       source_terminus_key: "58ee69adccbb4a42a638b2de6b8eac7c",
//       source_workspace: "DEV",
//       span_host: "undefined",
//       span_id: "40ba5110-e6ef-474d-bced-8da7321c4a9a",
//       span_kind: "server",
//       span_layer: "http",
//       terminus_app: "apm-demo-ui",
//       terminus_key: "58ee69adccbb4a42a638b2de6b8eac7c",
//       terminus_logid: "c0a76619c77e780a31ecefb3bc69067b",
//       trace_id: "c0a76619c77e780a31ecefb3bc69067b",
//       workspace: "DEV",
//     },
//     duration: 3011000064,
//     selfDuration: 7000064,
//   },
// ];

const spans = [
  {
    id: "a9a67175-b7ba-4d94-a1af-4ef32ac82be2",
    traceId: "40cefb13-6953-4d45-bd84-827d17bbcfb9",
    operationName: "Mysql/PreparedStatement/execute",
    startTime: 1630845777103000000,
    endTime: 1630845780113000000,
    parentSpanId: "3bc93936-db57-4ff3-8e45-0ae4a7d47497",
    timestamp: 0,
    tags: {
      application_id: "15",
      application_name: "apm-demo",
      cluster_name: "terminus-dev",
      component: "Mysql",
      db_instance: "mysql",
      db_statement: "SELECT SLEEP(?);",
      db_type: "Mysql",
      host: "mysql-master.group-addon-mysql--w525151b176404e549e876ac3ccf10676.svc.cluster.local:3306",
      host_ip: "10.0.6.216",
      operation_name: "Mysql/PreparedStatement/execute",
      org_id: "2",
      org_name: "terminus",
      parent_span_id: "3bc93936-db57-4ff3-8e45-0ae4a7d47497",
      peer_hostname: "mysql-master.group-addon-mysql--w525151b176404e549e876ac3ccf10676.svc.cluster.local:3306",
      project_id: "13",
      project_name: "apm-demo-testwushan",
      runtime_id: "9",
      runtime_name: "feature/simple",
      service_id: "15_feature/simple_apm-demo-api",
      service_name: "apm-demo-api",
      span_id: "a9a67175-b7ba-4d94-a1af-4ef32ac82be2",
      span_kind: "client",
      span_layer: "db",
      terminus_key: "58ee69adccbb4a42a638b2de6b8eac7c",
      trace_id: "40cefb13-6953-4d45-bd84-827d17bbcfb9",
      workspace: "DEV",
    },
    duration: 3010000000,
    selfDuration: 3010000000,
  },
  {
    id: "3bc93936-db57-4ff3-8e45-0ae4a7d47497",
    traceId: "40cefb13-6953-4d45-bd84-827d17bbcfb9",
    operationName: "GET http://apm-demo-api-0418e7149b.project-13-dev.svc.cluster.local:8095/api/mysql/sleep",
    startTime: 1630845777102000000,
    endTime: 1630845780114000000,
    parentSpanId: "0d4ecb46-a1ea-4a6c-8090-4cff5abaa224",
    timestamp: 0,
    tags: {
      application_id: "15",
      application_name: "apm-demo",
      cluster_name: "terminus-dev",
      component: "SpringBoot",
      host: "apm-demo-api-0418e7149b.project-13-dev.svc.cluster.local:8095",
      host_ip: "10.0.6.216",
      http_method: "GET",
      http_path: "/api/mysql/sleep",
      http_status_code: "200",
      http_url: "http://apm-demo-api-0418e7149b.project-13-dev.svc.cluster.local:8095/api/mysql/sleep",
      operation_name: "GET http://apm-demo-api-0418e7149b.project-13-dev.svc.cluster.local:8095/api/mysql/sleep",
      org_id: "2",
      org_name: "terminus",
      parent_span_id: "0d4ecb46-a1ea-4a6c-8090-4cff5abaa224",
      project_id: "13",
      project_name: "apm-demo-testwushan",
      runtime_id: "9",
      runtime_name: "feature/simple",
      service_id: "15_feature/simple_apm-demo-api",
      service_name: "apm-demo-api",
      span_id: "3bc93936-db57-4ff3-8e45-0ae4a7d47497",
      span_kind: "server",
      span_layer: "http",
      terminus_key: "58ee69adccbb4a42a638b2de6b8eac7c",
      trace_id: "40cefb13-6953-4d45-bd84-827d17bbcfb9",
      workspace: "DEV",
    },
    duration: 3012000000,
    selfDuration: 2000000,
  },
  {
    id: "33781705-97da-4372-b5dd-34d614f2fb8f",
    traceId: "40cefb13-6953-4d45-bd84-827d17bbcfb9",
    operationName: "server /api/mysql/sleep?seconds=3",
    startTime: 1630845777096000000,
    endTime: 1630845780115000000,
    parentSpanId: "",
    timestamp: 0,
    tags: {
      application_id: "15",
      application_name: "apm-demo",
      cluster_name: "terminus-dev",
      component: "NodeJs",
      host: "telegraf-app-00e2f41199-znhmk",
      host_ip: "10.0.6.220",
      http_method: "GET",
      http_path: "apm-demo-ui-dev.dev.terminus.io/api/mysql/sleep?seconds=3",
      http_status_code: "200",
      http_url: "/api/mysql/sleep?seconds=3",
      instance_id: "78ceeed3-6f35-4f21-9e63-bf9c447aeea1",
      operation_name: "server /api/mysql/sleep?seconds=3",
      org_id: "2",
      org_name: "erda",
      parent_span_id: "",
      peer_hostname: "apm-demo-ui-dev.dev.terminus.io",
      project_id: "13",
      project_name: "apm-demo-testwushan",
      runtime_id: "9",
      runtime_name: "feature/simple",
      service_id: "15_feature/simple_apm-demo-ui",
      service_instance_id: "78ceeed3-6f35-4f21-9e63-bf9c447aeea1",
      service_ip: "10.112.0.7",
      service_name: "apm-demo-ui",
      "source-addon-id": "ApiGateway",
      "source-addon-type": "ApiGateway",
      span_host: "apm-demo-ui-dev.dev.terminus.io",
      span_id: "33781705-97da-4372-b5dd-34d614f2fb8f",
      span_kind: "server",
      span_layer: "http",
      terminus_app: "apm-demo-ui",
      terminus_key: "58ee69adccbb4a42a638b2de6b8eac7c",
      terminus_logid: "40cefb13-6953-4d45-bd84-827d17bbcfb9",
      trace_id: "40cefb13-6953-4d45-bd84-827d17bbcfb9",
      workspace: "DEV",
    },
    duration: 3019000064,
    selfDuration: 3019000064,
  },
];

function list_to_tree2(list) {
  const map = {};
  let roots = [];
  let existIds = [];

  for (let i = 0; i < list.length; i++) {
    map[list[i].id] = i;
    list[i].children = [];
    existIds.push(list[i].id);
  }

  for (i = 0; i < list.length; i += 1) {
    const node = list[i];
    if (node.parentSpanId !== "" && existIds.includes(node.parentSpanId)) {
      list[map[node.parentSpanId]].children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}

const foo = list_to_tree2(spans);
console.log(foo);

function list_to_tree(list) {
  var map = {},
    node,
    roots = [],
    i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId !== "0") {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

var entries = [
  {
    id: "6",
    parentId: "12",
    text: "Boy",
    level: "2",
    // children: null,
  },
  {
    id: "7",
    parentId: "12",
    text: "Other",
    level: "2",
    // children: null,
  },
  {
    id: "9",
    parentId: "0",
    text: "Woman",
    level: "1",
    // children: null,
  },
  {
    id: "11",
    parentId: "9",
    text: "Girl",
    level: "2",
    // children: null,
  },
  {
    id: "12",
    parentId: "0",
    text: "Man",
    level: "1",
    // children: null,
  },
];

// console.log(list_to_tree(entries));
