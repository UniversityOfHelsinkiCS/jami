#!/bin/bash
# Runs the integration tests in tests/ against a locally running app.
# Starts the dev stack (app exposed on localhost:3001, which is what
# tests/util/utils.js talks to), waits for /ping, runs vitest, then stops
# the stack again. The named pg_data volume is kept.

set -euo pipefail

COMPOSE="docker compose"
BASE_URL="http://localhost:3001"

cleanup() {
  local status=$?
  if [ $status -ne 0 ]; then
    echo "--- application logs ---"
    $COMPOSE logs -t --tail=100 || true
  fi
  $COMPOSE down --remove-orphans || true
  exit $status
}
trap cleanup EXIT

$COMPOSE up -d --build

echo "Waiting for $BASE_URL/ping ..."
for _ in $(seq 1 90); do
  if curl -fsS "$BASE_URL/ping" >/dev/null 2>&1; then
    echo "Server is up."
    npx vitest run "$@"
    exit $?
  fi
  sleep 1
done

echo "Server did not respond at $BASE_URL/ping within 90 seconds." >&2
exit 1
