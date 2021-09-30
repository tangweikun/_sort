var arrayToTree = require("array-to-tree");

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
    parentSpanId: null,
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

var dataOne = [
  {
    id: 1,
    name: "Portfolio",
    parent_id: undefined,
  },
  {
    id: 2,
    name: "Web Development",
    parent_id: 1,
  },
  {
    id: 3,
    name: "Recent Works",
    parent_id: 2,
  },
  {
    id: 4,
    name: "About Me",
    parent_id: undefined,
  },
];

describe("_sort", () => {
  it("should be defined", () => {
    expect(arrayToTree(dataOne)).toEqual([
      {
        children: [
          { children: [{ id: 3, name: "Recent Works", parent_id: 2 }], id: 2, name: "Web Development", parent_id: 1 },
        ],
        id: 1,
        name: "Portfolio",
        parent_id: undefined,
      },
      { id: 4, name: "About Me", parent_id: undefined },
    ]);
  });

  it("empty list, should equal []", () => {
    console.log(
      arrayToTree(spans, {
        parentProperty: "parentSpanId",
      })
    );
  });

  //   it("only have one element, should equal [4]", () => {
  //     const originList = [-2];
  //     expect(_sort(originList)).toEqual([4]);
  //   });
});
