SELECT
  open_time,
  "assetInfoId",
  "openPrice",
  "closePrice",
  "highPrice",
  "lowPrice",
  volume
FROM
  _timescaledb_internal._materialized_hypertable_15
ORDER BY
  open_time;