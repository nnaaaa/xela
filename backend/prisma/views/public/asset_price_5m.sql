(
  SELECT
    _materialized_hypertable_17.open_time,
    _materialized_hypertable_17."assetInfoId",
    _materialized_hypertable_17."openPrice",
    _materialized_hypertable_17."closePrice",
    _materialized_hypertable_17."highPrice",
    _materialized_hypertable_17."lowPrice",
    _materialized_hypertable_17.volume
  FROM
    _timescaledb_internal._materialized_hypertable_17
  WHERE
    (
      _materialized_hypertable_17.open_time < COALESCE(
        _timescaledb_functions.to_timestamp_without_timezone(_timescaledb_functions.cagg_watermark(17)),
        '-infinity' :: timestamp without time zone
      )
    )
  ORDER BY
    _materialized_hypertable_17.open_time
)
UNION
ALL (
  SELECT
    time_bucket('00:05:00' :: INTERVAL, ap.open_time) AS open_time,
    ap."assetInfoId",
    FIRST(ap."openPrice", ap.open_time) AS "openPrice",
    last(ap."closePrice", ap.open_time) AS "closePrice",
    max(ap."highPrice") AS "highPrice",
    min(ap."lowPrice") AS "lowPrice",
    sum(ap.volume) AS volume
  FROM
    "AssetPrice" ap
  WHERE
    (
      ap.open_time >= COALESCE(
        _timescaledb_functions.to_timestamp_without_timezone(_timescaledb_functions.cagg_watermark(17)),
        '-infinity' :: timestamp without time zone
      )
    )
  GROUP BY
    (time_bucket('00:05:00' :: INTERVAL, ap.open_time)),
    ap."assetInfoId"
  ORDER BY
    (time_bucket('00:05:00' :: INTERVAL, ap.open_time))
)
ORDER BY
  1;