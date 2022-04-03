import type { WalletProvider } from "./types";

const wallets: WalletProvider[] = [
    {
        id: "braavos",
        name: "Braavos",
        icon: "data:image/svg;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgLz4KICAgIDxtYXNrIGlkPSJwYXRoLTEtaW5zaWRlLTFfMTc0XzEyOTEiID4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzMi40OTkgMzYuMjQ5OEMxMzIuMDEyIDM2LjIyMDQgMTMxLjUyMiAzNi4yMDU0IDEzMS4wMjggMzYuMjA1NEMxMTguMDE0IDM2LjIwNTQgMTA3LjQzNSA0Ni41NzY0IDEwNy4xODUgNTkuNDY0MUMxMDIuNzI4IDU4LjYyNTcgOTguMTA4OCA1OC41NjIyIDkzLjU0NTkgNTkuMzM1NkM5My4yMjg5IDQ2LjUwNzYgODIuNjc2NSAzNi4yMDU0IDY5LjcwNTQgMzYuMjA1NEM2OS4yMTE4IDM2LjIwNTQgNjguNzIxNiAzNi4yMjAzIDY4LjIzNTQgMzYuMjQ5OEM3NC4zMzM2IDI0Ljc5OTkgODYuNDM0NyAxNyAxMDAuMzY3IDE3QzExNC4yOTkgMTcgMTI2LjQgMjQuNzk5OSAxMzIuNDk5IDM2LjI0OThaIi8+CiAgICA8L21hc2s+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzMi40OTkgMzYuMjQ5OEMxMzIuMDEyIDM2LjIyMDQgMTMxLjUyMiAzNi4yMDU0IDEzMS4wMjggMzYuMjA1NEMxMTguMDE0IDM2LjIwNTQgMTA3LjQzNSA0Ni41NzY0IDEwNy4xODUgNTkuNDY0MUMxMDIuNzI4IDU4LjYyNTcgOTguMTA4OCA1OC41NjIyIDkzLjU0NTkgNTkuMzM1NkM5My4yMjg5IDQ2LjUwNzYgODIuNjc2NSAzNi4yMDU0IDY5LjcwNTQgMzYuMjA1NEM2OS4yMTE4IDM2LjIwNTQgNjguNzIxNiAzNi4yMjAzIDY4LjIzNTQgMzYuMjQ5OEM3NC4zMzM2IDI0Ljc5OTkgODYuNDM0NyAxNyAxMDAuMzY3IDE3QzExNC4yOTkgMTcgMTI2LjQgMjQuNzk5OSAxMzIuNDk5IDM2LjI0OThaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTc0XzEyOTEpIi8+CiAgICA8cGF0aCBkPSJNMTMyLjQ5OSAzNi4yNDk4TDEzMi40MjggMzcuNDI0MUwxMzQuNTI1IDM3LjU1MUwxMzMuNTM3IDM1LjY5NjdMMTMyLjQ5OSAzNi4yNDk4Wk0xMDcuMTg1IDU5LjQ2NDFMMTA2Ljk2OCA2MC42MjAzTDEwOC4zMzQgNjAuODc3NEwxMDguMzYxIDU5LjQ4NjlMMTA3LjE4NSA1OS40NjQxWk05My41NDU5IDU5LjMzNTZMOTIuMzY5OCA1OS4zNjQ3TDkyLjQwMzQgNjAuNzIyNUw5My43NDI1IDYwLjQ5NTVMOTMuNTQ1OSA1OS4zMzU2Wk02OC4yMzU0IDM2LjI0OThMNjcuMTk3IDM1LjY5NjdMNjYuMjA5NCAzNy41NTFMNjguMzA2NCAzNy40MjQxTDY4LjIzNTQgMzYuMjQ5OFpNMTMxLjAyOCAzNy4zODE5QzEzMS40OTggMzcuMzgxOSAxMzEuOTY1IDM3LjM5NjEgMTMyLjQyOCAzNy40MjQxTDEzMi41NyAzNS4wNzU1QzEzMi4wNiAzNS4wNDQ2IDEzMS41NDYgMzUuMDI5IDEzMS4wMjggMzUuMDI5VjM3LjM4MTlaTTEwOC4zNjEgNTkuNDg2OUMxMDguNTk4IDQ3LjI0NDMgMTE4LjY1MSAzNy4zODE5IDEzMS4wMjggMzcuMzgxOVYzNS4wMjlDMTE3LjM3NyAzNS4wMjkgMTA2LjI3MSA0NS45MDg2IDEwNi4wMDkgNTkuNDQxNEwxMDguMzYxIDU5LjQ4NjlaTTkzLjc0MjUgNjAuNDk1NUM5OC4xNjU5IDU5Ljc0NTggMTAyLjY0NCA1OS44MDcyIDEwNi45NjggNjAuNjIwM0wxMDcuNDAzIDU4LjMwNzlDMTAyLjgxMSA1Ny40NDQyIDk4LjA1MTcgNTcuMzc4NiA5My4zNDkzIDU4LjE3NTdMOTMuNzQyNSA2MC40OTU1Wk02OS43MDU0IDM3LjM4MTlDODIuMDQyIDM3LjM4MTkgOTIuMDY4NiA0Ny4xNzg4IDkyLjM2OTggNTkuMzY0N0w5NC43MjIgNTkuMzA2NkM5NC4zODkxIDQ1LjgzNjMgODMuMzExIDM1LjAyOSA2OS43MDU0IDM1LjAyOVYzNy4zODE5Wk02OC4zMDY0IDM3LjQyNDFDNjguNzY5IDM3LjM5NjEgNjkuMjM1NSAzNy4zODE5IDY5LjcwNTQgMzcuMzgxOVYzNS4wMjlDNjkuMTg4IDM1LjAyOSA2OC42NzQyIDM1LjA0NDYgNjguMTY0MyAzNS4wNzU0TDY4LjMwNjQgMzcuNDI0MVpNMTAwLjM2NyAxNS44MjM1Qzg1Ljk4NTEgMTUuODIzNSA3My40OTI1IDIzLjg3NjQgNjcuMTk3IDM1LjY5NjdMNjkuMjczNyAzNi44MDI4Qzc1LjE3NDcgMjUuNzIzNCA4Ni44ODQyIDE4LjE3NjUgMTAwLjM2NyAxOC4xNzY1VjE1LjgyMzVaTTEzMy41MzcgMzUuNjk2N0MxMjcuMjQxIDIzLjg3NjQgMTE0Ljc0OSAxNS44MjM1IDEwMC4zNjcgMTUuODIzNVYxOC4xNzY1QzExMy44NSAxOC4xNzY1IDEyNS41NTkgMjUuNzIzNCAxMzEuNDYgMzYuODAyOEwxMzMuNTM3IDM1LjY5NjdaIiAgbWFzaz0idXJsKCNwYXRoLTEtaW5zaWRlLTFfMTc0XzEyOTEpIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjg0NDkgMTA3LjYxN0w5OS45OTk2IDkwLjcyMTJMMTU3LjUzMSAxMDguMDMxQzE1OC4zMTggMTEwLjI3NCAxNTguNzQ5IDExMS44NzMgMTU4LjkxMSAxMTIuNTEyQzE1OC45NjggMTEyLjczOCAxNTguOTk0IDExMi45MjQgMTU5LjAxMSAxMTMuMTU3QzE1OS4xOTggMTE1LjczNCAxNjAuMzY4IDEzMi41MjMgMTU5Ljg4MyAxNDMuNjE3QzE1OS41OTEgMTUwLjI5IDE1OS4xMDEgMTYwLjI0OCAxNTkuMDAzIDE2Mi4yMjJDMTU4Ljk5MiAxNjIuNDU3IDE1OC45OTcgMTYyLjY3NCAxNTkuMDExIDE2Mi45MDlDMTU5LjE3MSAxNjUuNTk3IDE1OS40ODggMTgzLjMwNiAxNDAuMTcxIDE4My4zMDZDMTIzLjA2NSAxODMuMzA2IDExOS4wNzIgMTc0LjkwMyAxMTguMzM1IDE3Mi43NzhDMTE4LjIyNSAxNzIuNDYgMTE4LjE5IDE3Mi4xMjQgMTE4LjE5IDE3MS43ODdWMTU1LjM2MkMxMTguMTkgMTUzLjYwNCAxMTkuMTc0IDE1MS45OTUgMTIwLjcyNSAxNTEuMTY4QzEyMy43MDMgMTQ5LjU3OSAxMjYuMDggMTQ4LjIyNyAxMjguNDU3IDE0Ni44NzRDMTMxLjQ3MSAxNDUuMTYgMTM0LjQ4NCAxNDMuNDQ1IDEzOC43MjQgMTQxLjI0OEMxNDcuMjAyIDEzNi44NTMgMTQ4LjEzMSAxMjUuMjU3IDE0OC4xMzEgMTI1LjI1N0MxNDguMTMxIDEyNS4yNTcgMTM1LjY2NSAxMjIuMDQyIDEyOC4wMzQgMTIzLjMxNEMxMjIuMyAxMjQuMjcgMTE0LjQ2NCAxMjguNTY2IDExMC45MjUgMTMwLjY0MkMxMDkuNzI4IDEzMS4zNDQgMTA4Ljk0NSAxMzIuNTY1IDEwOC43NTYgMTMzLjkzOUwxMDUuOTkzIDE1NC4wODdDMTA1LjY3MyAxNTYuNDE3IDEwMy42ODMgMTU4LjE1MyAxMDEuMzMxIDE1OC4xNTNIOTkuNTIxOEM5Ny4xMjE0IDE1OC4xNTMgOTUuMTA1OCAxNTYuMzQ3IDk0Ljg0NCAxNTMuOTYxTDkyLjY3MiAxMzQuMTY2QzkyLjUwNzEgMTMyLjY2MyA5MS42MzE1IDEzMS4zMzEgOTAuMjk0NSAxMzAuNjI0Qzg2LjM5MDkgMTI4LjU2MSA3Ny45MTE0IDEyNC4zNDUgNzEuOTgxMSAxMjMuMzE0QzYzLjYxNDYgMTIxLjg2IDUxLjg4NDUgMTI1LjI1NyA1MS44ODQ1IDEyNS4yNTdDNTEuODg0NSAxMjUuMjU3IDU2LjA2MDUgMTM2LjAzNSA2MS4yOTIgMTQxLjI0OEM2Ni4wOTgzIDE0Ni4wMzcgNzUuMzcyNCAxNDkuNjk0IDgwLjM1ODUgMTUxLjQxNUM4Mi4zNDE5IDE1Mi4xIDgzLjcyNTQgMTUzLjk0NiA4My43MjU0IDE1Ni4wNDRWMTcwLjk4QzgzLjcyNTQgMTcxLjg0IDgzLjQ5MzcgMTcyLjY4MiA4Mi45NjU3IDE3My4zNkM4MC44MTI5IDE3Ni4xMjQgNzMuOTcyOSAxODMuMzA2IDYxLjAyMTIgMTgzLjMwNkM0NC40MTgxIDE4My4zMDYgNDEuMTYwOCAxNjUuMzk4IDQwLjgwNTEgMTYzLjA1MUM0MC43NzkyIDE2Mi44OCA0MC43Njg3IDE2Mi43MTUgNDAuNzY2NiAxNjIuNTQyQzQwLjc0NTkgMTYwLjgzMiA0MC42MDg5IDE1MC45MjEgNDAuMTMyNSAxNDMuNjE3QzM5LjM4NDUgMTMyLjE0NyA0Mi4wMzYgMTE0LjU1NSA0Mi4yODQ5IDExMi45NEM0Mi4yOTg1IDExMi44NTEgNDIuMzExOCAxMTIuNzgxIDQyLjMzMiAxMTIuNjk0QzQyLjQ0NDcgMTEyLjIwOSA0Mi45MDAxIDExMC4zNDQgNDMuODQ0OSAxMDcuNjE3WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzE3NF8xMjkxKSIvPgogICAgPHBhdGggZD0iTTQzLjg0NDkgMTA3LjYxN0w0My42NzU0IDEwNy4wNTNMNDMuMzg3NSAxMDcuMTRMNDMuMjg5MSAxMDcuNDI0TDQzLjg0NDkgMTA3LjYxN1pNOTkuOTk5NiA5MC43MjEyTDEwMC4xNjkgOTAuMTU3OUw5OS45OTk2IDkwLjEwNjlMOTkuODMwMSA5MC4xNTc5TDk5Ljk5OTYgOTAuNzIxMlpNMTU3LjUzMSAxMDguMDMxTDE1OC4wODYgMTA3LjgzNkwxNTcuOTg3IDEwNy41NTRMMTU3LjcwMSAxMDcuNDY3TDE1Ny41MzEgMTA4LjAzMVpNMTU4LjkxMSAxMTIuNTEyTDE1OS40ODEgMTEyLjM2N0wxNTkuNDgxIDExMi4zNjdMMTU4LjkxMSAxMTIuNTEyWk0xNTkuMDExIDExMy4xNTdMMTU5LjU5OCAxMTMuMTE0TDE1OS41OTggMTEzLjExNEwxNTkuMDExIDExMy4xNTdaTTE1OS44ODMgMTQzLjYxN0wxNTkuMjk1IDE0My41OTFMMTU5LjI5NSAxNDMuNTkxTDE1OS44ODMgMTQzLjYxN1pNMTU5LjAwMyAxNjIuMjIyTDE1OC40MTYgMTYyLjE5M0wxNTguNDE2IDE2Mi4xOTNMMTU5LjAwMyAxNjIuMjIyWk0xNTkuMDExIDE2Mi45MDlMMTU4LjQyNCAxNjIuOTQ0TDE1OC40MjQgMTYyLjk0NEwxNTkuMDExIDE2Mi45MDlaTTExOC4zMzUgMTcyLjc3OEwxMTguODkxIDE3Mi41ODVMMTE4Ljg5MSAxNzIuNTg1TDExOC4zMzUgMTcyLjc3OFpNMTIwLjcyNSAxNTEuMTY4TDEyMC40NDggMTUwLjY0OUwxMjAuNDQ4IDE1MC42NDlMMTIwLjcyNSAxNTEuMTY4Wk0xMjguNDU3IDE0Ni44NzRMMTI4Ljc0OCAxNDcuMzg2TDEyOC43NDggMTQ3LjM4NkwxMjguNDU3IDE0Ni44NzRaTTEzOC43MjQgMTQxLjI0OEwxMzguOTk0IDE0MS43N0wxMzguOTk0IDE0MS43N0wxMzguNzI0IDE0MS4yNDhaTTE0OC4xMzEgMTI1LjI1N0wxNDguNzE3IDEyNS4zMDRMMTQ4Ljc1NyAxMjQuODExTDE0OC4yNzggMTI0LjY4OEwxNDguMTMxIDEyNS4yNTdaTTEyOC4wMzQgMTIzLjMxNEwxMjguMTMxIDEyMy44OTRMMTI4LjEzMSAxMjMuODk0TDEyOC4wMzQgMTIzLjMxNFpNMTEwLjkyNSAxMzAuNjQyTDExMC42MjcgMTMwLjEzNUwxMTAuNjI3IDEzMC4xMzVMMTEwLjkyNSAxMzAuNjQyWk0xMDguNzU2IDEzMy45MzlMMTA5LjMzOSAxMzQuMDE5TDEwOS4zMzkgMTM0LjAxOUwxMDguNzU2IDEzMy45MzlaTTEwNS45OTMgMTU0LjA4N0wxMDYuNTc2IDE1NC4xNjdMMTA2LjU3NiAxNTQuMTY3TDEwNS45OTMgMTU0LjA4N1pNOTQuODQ0IDE1My45NjFMOTQuMjU5MiAxNTQuMDI1TDk0LjI1OTIgMTU0LjAyNUw5NC44NDQgMTUzLjk2MVpNOTIuNjcyIDEzNC4xNjZMOTIuMDg3MyAxMzQuMjNMOTIuMDg3MyAxMzQuMjNMOTIuNjcyIDEzNC4xNjZaTTkwLjI5NDUgMTMwLjYyNEw5MC4wMTk2IDEzMS4xNDRMOTAuMDE5NiAxMzEuMTQ0TDkwLjI5NDUgMTMwLjYyNFpNNzEuOTgxMSAxMjMuMzE0TDcxLjg4MDMgMTIzLjg5NEw3MS44ODAzIDEyMy44OTRMNzEuOTgxMSAxMjMuMzE0Wk01MS44ODQ1IDEyNS4yNTdMNTEuNzIwOCAxMjQuNjkyTDUxLjEwMzkgMTI0Ljg3MUw1MS4zMzU5IDEyNS40N0w1MS44ODQ1IDEyNS4yNTdaTTYxLjI5MiAxNDEuMjQ4TDYwLjg3NjggMTQxLjY2NUw2MC44NzY4IDE0MS42NjVMNjEuMjkyIDE0MS4yNDhaTTgwLjM1ODUgMTUxLjQxNUw4MC4xNjY1IDE1MS45NzFMODAuMTY2NSAxNTEuOTcxTDgwLjM1ODUgMTUxLjQxNVpNODIuOTY1NyAxNzMuMzZMODIuNTAxNiAxNzIuOTk5TDgyLjUwMTYgMTcyLjk5OUw4Mi45NjU3IDE3My4zNlpNNDAuODA1MSAxNjMuMDUxTDQwLjIyMzUgMTYzLjEzOUw0MC4yMjM1IDE2My4xMzlMNDAuODA1MSAxNjMuMDUxWk00MC43NjY2IDE2Mi41NDJMNDEuMzU0OCAxNjIuNTM1TDQxLjM1NDggMTYyLjUzNUw0MC43NjY2IDE2Mi41NDJaTTQwLjEzMjUgMTQzLjYxN0w0MC43MTk1IDE0My41NzlMNDAuNzE5NSAxNDMuNTc5TDQwLjEzMjUgMTQzLjYxN1pNNDIuMjg0OSAxMTIuOTRMNDIuODY2MyAxMTMuMDI5TDQyLjg2NjMgMTEzLjAyOUw0Mi4yODQ5IDExMi45NFpNNDIuMzMyIDExMi42OTRMNDEuNzU5IDExMi41NjFMNDEuNzU5IDExMi41NjFMNDIuMzMyIDExMi42OTRaTTQ0LjAxNDQgMTA4LjE4TDEwMC4xNjkgOTEuMjg0NUw5OS44MzAxIDkwLjE1NzlMNDMuNjc1NCAxMDcuMDUzTDQ0LjAxNDQgMTA4LjE4Wk05OS44MzAxIDkxLjI4NDVMMTU3LjM2MiAxMDguNTk0TDE1Ny43MDEgMTA3LjQ2N0wxMDAuMTY5IDkwLjE1NzlMOTkuODMwMSA5MS4yODQ1Wk0xNTkuNDgxIDExMi4zNjdDMTU5LjMxNiAxMTEuNzE0IDE1OC44OCAxMTAuMDk4IDE1OC4wODYgMTA3LjgzNkwxNTYuOTc2IDEwOC4yMjZDMTU3Ljc1NiAxMTAuNDQ5IDE1OC4xODIgMTEyLjAzMSAxNTguMzQgMTEyLjY1NkwxNTkuNDgxIDExMi4zNjdaTTE1OS41OTggMTEzLjExNEMxNTkuNTc5IDExMi44NTUgMTU5LjU0OCAxMTIuNjM0IDE1OS40ODEgMTEyLjM2N0wxNTguMzQgMTEyLjY1NkMxNTguMzg3IDExMi44NDIgMTU4LjQwOSAxMTIuOTk0IDE1OC40MjQgMTEzLjE5OUwxNTkuNTk4IDExMy4xMTRaTTE2MC40NzEgMTQzLjY0M0MxNjAuOTU4IDEzMi41MDkgMTU5Ljc4NSAxMTUuNjg2IDE1OS41OTggMTEzLjExNEwxNTguNDI0IDExMy4xOTlDMTU4LjYxMiAxMTUuNzgyIDE1OS43NzkgMTMyLjUzNyAxNTkuMjk1IDE0My41OTFMMTYwLjQ3MSAxNDMuNjQzWk0xNTkuNTkxIDE2Mi4yNTFDMTU5LjY4OCAxNjAuMjc3IDE2MC4xNzkgMTUwLjMxOCAxNjAuNDcxIDE0My42NDNMMTU5LjI5NSAxNDMuNTkxQzE1OS4wMDMgMTUwLjI2MiAxNTguNTEzIDE2MC4yMTggMTU4LjQxNiAxNjIuMTkzTDE1OS41OTEgMTYyLjI1MVpNMTU5LjU5OCAxNjIuODc0QzE1OS41ODUgMTYyLjY1MiAxNTkuNTggMTYyLjQ1NyAxNTkuNTkxIDE2Mi4yNTFMMTU4LjQxNiAxNjIuMTkzQzE1OC40MDMgMTYyLjQ1NiAxNTguNDA5IDE2Mi42OTYgMTU4LjQyNCAxNjIuOTQ0TDE1OS41OTggMTYyLjg3NFpNMTQwLjE3MSAxODMuODk0QzE0NS4wOTMgMTgzLjg5NCAxNDguODA4IDE4Mi43NjUgMTUxLjYwMiAxODAuOTk0QzE1NC4zOTQgMTc5LjIyMiAxNTYuMjI4IDE3Ni44MzMgMTU3LjQyNCAxNzQuMzcyQzE1OS44MDYgMTY5LjQ3MiAxNTkuNjggMTY0LjI1IDE1OS41OTggMTYyLjg3NEwxNTguNDI0IDE2Mi45NDRDMTU4LjUwMiAxNjQuMjU2IDE1OC42MTQgMTY5LjIzMiAxNTYuMzY2IDE3My44NThDMTU1LjI0NyAxNzYuMTYgMTUzLjU0NyAxNzguMzY3IDE1MC45NzIgMTgwQzE0OC4zOTcgMTgxLjYzMyAxNDQuOTA4IDE4Mi43MTggMTQwLjE3MSAxODIuNzE4VjE4My44OTRaTTExNy43NzkgMTcyLjk3QzExOC4xNzcgMTc0LjExNyAxMTkuNDIgMTc2Ljg2IDEyMi43NjcgMTc5LjMxM0MxMjYuMTE1IDE4MS43NjggMTMxLjUxOSAxODMuODk0IDE0MC4xNzEgMTgzLjg5NFYxODIuNzE4QzEzMS43MTcgMTgyLjcxOCAxMjYuNTcxIDE4MC42NDMgMTIzLjQ2MiAxNzguMzY0QzEyMC4zNTIgMTc2LjA4NSAxMTkuMjMgMTczLjU2MyAxMTguODkxIDE3Mi41ODVMMTE3Ljc3OSAxNzIuOTdaTTExNy42MDIgMTcxLjc4N0MxMTcuNjAyIDE3Mi4xNjIgMTE3LjY0IDE3Mi41NjkgMTE3Ljc3OSAxNzIuOTdMMTE4Ljg5MSAxNzIuNTg1QzExOC44MSAxNzIuMzUxIDExOC43NzggMTcyLjA4NyAxMTguNzc4IDE3MS43ODdIMTE3LjYwMlpNMTE3LjYwMiAxNTUuMzYyVjE3MS43ODdIMTE4Ljc3OFYxNTUuMzYySDExNy42MDJaTTEyMC40NDggMTUwLjY0OUMxMTguNzEgMTUxLjU3NiAxMTcuNjAyIDE1My4zODMgMTE3LjYwMiAxNTUuMzYySDExOC43NzhDMTE4Ljc3OCAxNTMuODI2IDExOS42MzkgMTUyLjQxNCAxMjEuMDAyIDE1MS42ODdMMTIwLjQ0OCAxNTAuNjQ5Wk0xMjguMTY2IDE0Ni4zNjNDMTI1Ljc4OSAxNDcuNzE1IDEyMy40MTggMTQ5LjA2NCAxMjAuNDQ4IDE1MC42NDlMMTIxLjAwMiAxNTEuNjg3QzEyMy45ODggMTUwLjA5NCAxMjYuMzcxIDE0OC43MzggMTI4Ljc0OCAxNDcuMzg2TDEyOC4xNjYgMTQ2LjM2M1pNMTM4LjQ1MyAxNDAuNzI2QzEzNC4yMDMgMTQyLjkyOSAxMzEuMTgxIDE0NC42NDggMTI4LjE2NiAxNDYuMzYzTDEyOC43NDggMTQ3LjM4NkMxMzEuNzYxIDE0NS42NzIgMTM0Ljc2NiAxNDMuOTYyIDEzOC45OTQgMTQxLjc3TDEzOC40NTMgMTQwLjcyNlpNMTQ4LjEzMSAxMjUuMjU3QzE0Ny41NDUgMTI1LjIxIDE0Ny41NDUgMTI1LjIxIDE0Ny41NDUgMTI1LjIxQzE0Ny41NDUgMTI1LjIxIDE0Ny41NDUgMTI1LjIxIDE0Ny41NDUgMTI1LjIxQzE0Ny41NDUgMTI1LjIxIDE0Ny41NDUgMTI1LjIxIDE0Ny41NDUgMTI1LjIxMUMxNDcuNTQ1IDEyNS4yMTIgMTQ3LjU0NCAxMjUuMjEzIDE0Ny41NDQgMTI1LjIxNUMxNDcuNTQ0IDEyNS4yMiAxNDcuNTQzIDEyNS4yMjcgMTQ3LjU0MiAxMjUuMjM3QzE0Ny41NDEgMTI1LjI1NyAxNDcuNTM4IDEyNS4yODcgMTQ3LjUzMyAxMjUuMzI4QzE0Ny41MjUgMTI1LjQwOSAxNDcuNTEyIDEyNS41MzEgMTQ3LjQ5MSAxMjUuNjg5QzE0Ny40NTEgMTI2LjAwNCAxNDcuMzgzIDEyNi40NjMgMTQ3LjI3NiAxMjcuMDI4QzE0Ny4wNjEgMTI4LjE1OSAxNDYuNjg3IDEyOS43MTMgMTQ2LjA1NiAxMzEuMzk4QzE0NC43ODggMTM0Ljc4MiAxNDIuNTA4IDEzOC42MjQgMTM4LjQ1MyAxNDAuNzI2TDEzOC45OTQgMTQxLjc3QzE0My40MTcgMTM5LjQ3OCAxNDUuODQxIDEzNS4zMjUgMTQ3LjE1NyAxMzEuODExQzE0Ny44MTggMTMwLjA0OCAxNDguMjA3IDEyOC40MjggMTQ4LjQzMSAxMjcuMjQ4QzE0OC41NDQgMTI2LjY1NyAxNDguNjE1IDEyNi4xNzUgMTQ4LjY1OCAxMjUuODM5QzE0OC42OCAxMjUuNjcxIDE0OC42OTQgMTI1LjU0IDE0OC43MDQgMTI1LjQ0OUMxNDguNzA4IDEyNS40MDQgMTQ4LjcxMiAxMjUuMzY4IDE0OC43MTQgMTI1LjM0NEMxNDguNzE1IDEyNS4zMzIgMTQ4LjcxNiAxMjUuMzIzIDE0OC43MTYgMTI1LjMxNkMxNDguNzE3IDEyNS4zMTMgMTQ4LjcxNyAxMjUuMzEgMTQ4LjcxNyAxMjUuMzA4QzE0OC43MTcgMTI1LjMwNyAxNDguNzE3IDEyNS4zMDYgMTQ4LjcxNyAxMjUuMzA2QzE0OC43MTcgMTI1LjMwNSAxNDguNzE3IDEyNS4zMDUgMTQ4LjcxNyAxMjUuMzA1QzE0OC43MTcgMTI1LjMwNCAxNDguNzE3IDEyNS4zMDQgMTQ4LjEzMSAxMjUuMjU3Wk0xMjguMTMxIDEyMy44OTRDMTMxLjg0NiAxMjMuMjc1IDEzNi43OSAxMjMuNzQ2IDE0MC44NTIgMTI0LjM5QzE0Mi44NzMgMTI0LjcxIDE0NC42NTkgMTI1LjA3IDE0NS45MzggMTI1LjM0OUMxNDYuNTc4IDEyNS40ODkgMTQ3LjA5MSAxMjUuNjA5IDE0Ny40NDMgMTI1LjY5NEMxNDcuNjE5IDEyNS43MzYgMTQ3Ljc1NSAxMjUuNzY5IDE0Ny44NDcgMTI1Ljc5MkMxNDcuODkzIDEyNS44MDQgMTQ3LjkyNyAxMjUuODEyIDE0Ny45NSAxMjUuODE4QzE0Ny45NjIgMTI1LjgyMSAxNDcuOTcxIDEyNS44MjMgMTQ3Ljk3NiAxMjUuODI1QzE0Ny45NzkgMTI1LjgyNSAxNDcuOTgxIDEyNS44MjYgMTQ3Ljk4MiAxMjUuODI2QzE0Ny45ODMgMTI1LjgyNyAxNDcuOTg0IDEyNS44MjcgMTQ3Ljk4NCAxMjUuODI3QzE0Ny45ODQgMTI1LjgyNyAxNDcuOTg0IDEyNS44MjcgMTQ3Ljk4NCAxMjUuODI3QzE0Ny45ODQgMTI1LjgyNyAxNDcuOTg0IDEyNS44MjcgMTQ4LjEzMSAxMjUuMjU3QzE0OC4yNzggMTI0LjY4OCAxNDguMjc4IDEyNC42ODggMTQ4LjI3OCAxMjQuNjg4QzE0OC4yNzggMTI0LjY4OCAxNDguMjc3IDEyNC42ODcgMTQ4LjI3NyAxMjQuNjg3QzE0OC4yNzcgMTI0LjY4NyAxNDguMjc2IDEyNC42ODcgMTQ4LjI3NSAxMjQuNjg3QzE0OC4yNzMgMTI0LjY4NiAxNDguMjcxIDEyNC42ODYgMTQ4LjI2OCAxMjQuNjg1QzE0OC4yNjEgMTI0LjY4MyAxNDguMjUyIDEyNC42ODEgMTQ4LjI0IDEyNC42NzhDMTQ4LjIxNSAxMjQuNjcyIDE0OC4xNzkgMTI0LjY2MiAxNDguMTMyIDEyNC42NTFDMTQ4LjAzNyAxMjQuNjI3IDE0Ny44OTggMTI0LjU5MyAxNDcuNzE4IDEyNC41NUMxNDcuMzU5IDEyNC40NjMgMTQ2LjgzOCAxMjQuMzQyIDE0Ni4xOSAxMjQuMkMxNDQuODkzIDEyMy45MTcgMTQzLjA4NSAxMjMuNTUyIDE0MS4wMzYgMTIzLjIyOEMxMzYuOTU4IDEyMi41ODEgMTMxLjg1MyAxMjIuMDgxIDEyNy45MzggMTIyLjczNEwxMjguMTMxIDEyMy44OTRaTTExMS4yMjIgMTMxLjE0OUMxMTIuOTgzIDEzMC4xMTcgMTE1LjgxIDEyOC41MzQgMTE4LjkwNSAxMjcuMDkxQzEyMi4wMSAxMjUuNjQ0IDEyNS4zNDQgMTI0LjM1OSAxMjguMTMxIDEyMy44OTRMMTI3LjkzOCAxMjIuNzM0QzEyNC45OSAxMjMuMjI1IDEyMS41NCAxMjQuNTY2IDExOC40MDggMTI2LjAyNUMxMTUuMjY3IDEyNy40ODggMTEyLjQwNiAxMjkuMDkxIDExMC42MjcgMTMwLjEzNUwxMTEuMjIyIDEzMS4xNDlaTTEwOS4zMzkgMTM0LjAxOUMxMDkuNTA0IDEzMi44MTUgMTEwLjE4OSAxMzEuNzU2IDExMS4yMjIgMTMxLjE0OUwxMTAuNjI3IDEzMC4xMzVDMTA5LjI2OCAxMzAuOTMyIDEwOC4zODUgMTMyLjMxNSAxMDguMTc0IDEzMy44NTlMMTA5LjMzOSAxMzQuMDE5Wk0xMDYuNTc2IDE1NC4xNjdMMTA5LjMzOSAxMzQuMDE5TDEwOC4xNzQgMTMzLjg1OUwxMDUuNDEgMTU0LjAwN0wxMDYuNTc2IDE1NC4xNjdaTTEwMS4zMzEgMTU4Ljc0MUMxMDMuOTc3IDE1OC43NDEgMTA2LjIxNiAxNTYuNzg4IDEwNi41NzYgMTU0LjE2N0wxMDUuNDEgMTU0LjAwN0MxMDUuMTMxIDE1Ni4wNDYgMTAzLjM4OSAxNTcuNTY1IDEwMS4zMzEgMTU3LjU2NVYxNTguNzQxWk05OS41MjE4IDE1OC43NDFIMTAxLjMzMVYxNTcuNTY1SDk5LjUyMThWMTU4Ljc0MVpNOTQuMjU5MiAxNTQuMDI1Qzk0LjU1MzggMTU2LjcwOSA5Ni44MjE0IDE1OC43NDEgOTkuNTIxOCAxNTguNzQxVjE1Ny41NjVDOTcuNDIxNSAxNTcuNTY1IDk1LjY1NzggMTU1Ljk4NCA5NS40Mjg3IDE1My44OTZMOTQuMjU5MiAxNTQuMDI1Wk05Mi4wODczIDEzNC4yM0w5NC4yNTkyIDE1NC4wMjVMOTUuNDI4NyAxNTMuODk2TDkzLjI1NjcgMTM0LjEwMkw5Mi4wODczIDEzNC4yM1pNOTAuMDE5NiAxMzEuMTQ0QzkxLjE3NzYgMTMxLjc1NiA5MS45NDI4IDEzMi45MTMgOTIuMDg3MyAxMzQuMjNMOTMuMjU2NyAxMzQuMTAyQzkzLjA3MTMgMTMyLjQxMiA5Mi4wODU0IDEzMC45MDUgOTAuNTY5NCAxMzAuMTA0TDkwLjAxOTYgMTMxLjE0NFpNNzEuODgwMyAxMjMuODk0Qzc3LjcwNDMgMTI0LjkwNiA4Ni4xMDMzIDEyOS4wNzQgOTAuMDE5NiAxMzEuMTQ0TDkwLjU2OTQgMTMwLjEwNEM4Ni42Nzg0IDEyOC4wNDcgNzguMTE4NSAxMjMuNzg0IDcyLjA4MTggMTIyLjczNEw3MS44ODAzIDEyMy44OTRaTTUxLjg4NDUgMTI1LjI1N0M1Mi4wNDgxIDEyNS44MjIgNTIuMDQ4IDEyNS44MjIgNTIuMDQ4MSAxMjUuODIyQzUyLjA0ODEgMTI1LjgyMiA1Mi4wNDgyIDEyNS44MjIgNTIuMDQ4MyAxMjUuODIyQzUyLjA0ODUgMTI1LjgyMiA1Mi4wNDkgMTI1LjgyMiA1Mi4wNDk2IDEyNS44MjJDNTIuMDUwNyAxMjUuODIxIDUyLjA1MjcgMTI1LjgyMSA1Mi4wNTUzIDEyNS44MkM1Mi4wNjA1IDEyNS44MTkgNTIuMDY4NSAxMjUuODE2IDUyLjA3OTIgMTI1LjgxM0M1Mi4xMDA4IDEyNS44MDcgNTIuMTMzMiAxMjUuNzk4IDUyLjE3NjIgMTI1Ljc4NkM1Mi4yNjIyIDEyNS43NjIgNTIuMzkwMyAxMjUuNzI3IDUyLjU1NjYgMTI1LjY4MkM1Mi44ODk0IDEyNS41OTMgNTMuMzc1NSAxMjUuNDY4IDUzLjk4NTUgMTI1LjMyMUM1NS4yMDU4IDEyNS4wMjggNTYuOTE5OSAxMjQuNjUxIDU4Ljg5MjcgMTI0LjMyQzYyLjg1MzQgMTIzLjY1NiA2Ny43OTc3IDEyMy4xODQgNzEuODgwMyAxMjMuODk0TDcyLjA4MTggMTIyLjczNEM2Ny43OTggMTIxLjk5IDYyLjY5MzkgMTIyLjQ5IDU4LjY5OCAxMjMuMTZDNTYuNjkyNSAxMjMuNDk3IDU0Ljk1MTEgMTIzLjg3OSA1My43MTA1IDEyNC4xNzdDNTMuMDkwMSAxMjQuMzI2IDUyLjU5NDQgMTI0LjQ1NSA1Mi4yNTMgMTI0LjU0NkM1Mi4wODIzIDEyNC41OTEgNTEuOTUwMSAxMjQuNjI4IDUxLjg2MDIgMTI0LjY1M0M1MS44MTUzIDEyNC42NjUgNTEuNzgwOSAxMjQuNjc1IDUxLjc1NzUgMTI0LjY4MkM1MS43NDU4IDEyNC42ODUgNTEuNzM2OCAxMjQuNjg4IDUxLjczMDcgMTI0LjY4OUM1MS43Mjc2IDEyNC42OSA1MS43MjUzIDEyNC42OTEgNTEuNzIzNiAxMjQuNjkxQzUxLjcyMjggMTI0LjY5MiA1MS43MjIyIDEyNC42OTIgNTEuNzIxNyAxMjQuNjkyQzUxLjcyMTUgMTI0LjY5MiA1MS43MjEyIDEyNC42OTIgNTEuNzIxMSAxMjQuNjkyQzUxLjcyMDkgMTI0LjY5MiA1MS43MjA4IDEyNC42OTIgNTEuODg0NSAxMjUuMjU3Wk02MS43MDcyIDE0MC44MzFDNTkuMTYxMSAxMzguMjk0IDU2Ljg0MzYgMTM0LjM2NyA1NS4xNTEgMTMxLjAzMkM1NC4zMDg2IDEyOS4zNzEgNTMuNjI4MSAxMjcuODcyIDUzLjE1ODQgMTI2Ljc4OUM1Mi45MjM2IDEyNi4yNDcgNTIuNzQxNyAxMjUuODEgNTIuNjE4NyAxMjUuNTA4QzUyLjU1NzMgMTI1LjM1OCA1Mi41MTA1IDEyNS4yNDEgNTIuNDc5MyAxMjUuMTYyQzUyLjQ2MzcgMTI1LjEyMyA1Mi40NTIgMTI1LjA5MyA1Mi40NDQyIDEyNS4wNzNDNTIuNDQwMyAxMjUuMDY0IDUyLjQzNzQgMTI1LjA1NiA1Mi40MzU2IDEyNS4wNTFDNTIuNDM0NiAxMjUuMDQ5IDUyLjQzMzkgMTI1LjA0NyA1Mi40MzM1IDEyNS4wNDZDNTIuNDMzMyAxMjUuMDQ2IDUyLjQzMzEgMTI1LjA0NSA1Mi40MzMgMTI1LjA0NUM1Mi40MzMgMTI1LjA0NSA1Mi40MzMgMTI1LjA0NSA1Mi40MzI5IDEyNS4wNDVDNTIuNDMyOSAxMjUuMDQ1IDUyLjQzMyAxMjUuMDQ1IDUxLjg4NDUgMTI1LjI1N0M1MS4zMzU5IDEyNS40NyA1MS4zMzYgMTI1LjQ3IDUxLjMzNjEgMTI1LjQ3QzUxLjMzNjEgMTI1LjQ3IDUxLjMzNjIgMTI1LjQ3IDUxLjMzNjIgMTI1LjQ3QzUxLjMzNjQgMTI1LjQ3MSA1MS4zMzY2IDEyNS40NzIgNTEuMzM2OSAxMjUuNDcyQzUxLjMzNzUgMTI1LjQ3NCA1MS4zMzgzIDEyNS40NzYgNTEuMzM5NCAxMjUuNDc5QzUxLjM0MTYgMTI1LjQ4NCA1MS4zNDQ4IDEyNS40OTIgNTEuMzQ5IDEyNS41MDNDNTEuMzU3MyAxMjUuNTI0IDUxLjM2OTcgMTI1LjU1NiA1MS4zODU5IDEyNS41OTdDNTEuNDE4NSAxMjUuNjc5IDUxLjQ2NjUgMTI1Ljc5OSA1MS41Mjk1IDEyNS45NTNDNTEuNjU1MyAxMjYuMjYxIDUxLjg0MDUgMTI2LjcwNiA1Mi4wNzkgMTI3LjI1N0M1Mi41NTU4IDEyOC4zNTcgNTMuMjQ2MyAxMjkuODc4IDU0LjEwMTkgMTMxLjU2NEM1NS44MDUyIDEzNC45MjEgNTguMTkxNCAxMzguOTg5IDYwLjg3NjggMTQxLjY2NUw2MS43MDcyIDE0MC44MzFaTTgwLjU1MDQgMTUwLjg1OUM3OC4wNzAyIDE1MC4wMDMgNzQuNTI5MyAxNDguNjY3IDcxLjAxNTcgMTQ2Ljk1M0M2Ny40OTI2IDE0NS4yMzUgNjQuMDQxNSAxNDMuMTU3IDYxLjcwNzIgMTQwLjgzMUw2MC44NzY4IDE0MS42NjVDNjMuMzQ4OCAxNDQuMTI4IDY2LjkzNzkgMTQ2LjI3MyA3MC40OTk5IDE0OC4wMTFDNzQuMDcxNSAxNDkuNzUzIDc3LjY2MDYgMTUxLjEwNiA4MC4xNjY1IDE1MS45NzFMODAuNTUwNCAxNTAuODU5Wk04NC4zMTM3IDE1Ni4wNDRDODQuMzEzNyAxNTMuNjgyIDgyLjc1ODQgMTUxLjYyMSA4MC41NTA0IDE1MC44NTlMODAuMTY2NSAxNTEuOTcxQzgxLjkyNTQgMTUyLjU3OCA4My4xMzcyIDE1NC4yMSA4My4xMzcyIDE1Ni4wNDRIODQuMzEzN1pNODQuMzEzNyAxNzAuOThWMTU2LjA0NEg4My4xMzcyVjE3MC45OEg4NC4zMTM3Wk04My40Mjk3IDE3My43MjJDODQuMDUzOSAxNzIuOTIgODQuMzEzNyAxNzEuOTQzIDg0LjMxMzcgMTcwLjk4SDgzLjEzNzJDODMuMTM3MiAxNzEuNzM3IDgyLjkzMzQgMTcyLjQ0NCA4Mi41MDE2IDE3Mi45OTlMODMuNDI5NyAxNzMuNzIyWk02MS4wMjEyIDE4My44OTRDNzQuMjE5OSAxODMuODk0IDgxLjIxMzMgMTc2LjU2NyA4My40Mjk3IDE3My43MjJMODIuNTAxNiAxNzIuOTk5QzgwLjQxMjUgMTc1LjY4MSA3My43MjU4IDE4Mi43MTggNjEuMDIxMiAxODIuNzE4VjE4My44OTRaTTQwLjIyMzUgMTYzLjEzOUM0MC40MDU5IDE2NC4zNDIgNDEuMzI0MiAxNjkuNDk3IDQ0LjMxOTMgMTc0LjM2N0M0Ny4zMjc5IDE3OS4yNTggNTIuNDU5OSAxODMuODk0IDYxLjAyMTIgMTgzLjg5NFYxODIuNzE4QzUyLjk3OTQgMTgyLjcxOCA0OC4xODEyIDE3OC40IDQ1LjMyMTQgMTczLjc1QzQyLjQ0ODIgMTY5LjA3OSA0MS41NjAxIDE2NC4xMDcgNDEuMzg2NyAxNjIuOTYzTDQwLjIyMzUgMTYzLjEzOVpNNDAuMTc4NCAxNjIuNTQ5QzQwLjE4MDcgMTYyLjc0MiA0MC4xOTI2IDE2Mi45MzUgNDAuMjIzNSAxNjMuMTM5TDQxLjM4NjcgMTYyLjk2M0M0MS4zNjU4IDE2Mi44MjUgNDEuMzU2NiAxNjIuNjg4IDQxLjM1NDggMTYyLjUzNUw0MC4xNzg0IDE2Mi41NDlaTTM5LjU0NTUgMTQzLjY1NUM0MC4wMjA4IDE1MC45NDIgNDAuMTU3NyAxNjAuODM4IDQwLjE3ODQgMTYyLjU0OUw0MS4zNTQ4IDE2Mi41MzVDNDEuMzM0MSAxNjAuODI2IDQxLjE5NyAxNTAuOSA0MC43MTk1IDE0My41NzlMMzkuNTQ1NSAxNDMuNjU1Wk00MS43MDM1IDExMi44NUM0MS40NTY0IDExNC40NTQgMzguNzkyNiAxMzIuMTEgMzkuNTQ1NSAxNDMuNjU1TDQwLjcxOTUgMTQzLjU3OUMzOS45NzY0IDEzMi4xODQgNDIuNjE1NiAxMTQuNjU3IDQyLjg2NjMgMTEzLjAyOUw0MS43MDM1IDExMi44NVpNNDEuNzU5IDExMi41NjFDNDEuNzM1MiAxMTIuNjY0IDQxLjcxOTIgMTEyLjc0OCA0MS43MDM1IDExMi44NUw0Mi44NjYzIDExMy4wMjlDNDIuODc3OCAxMTIuOTU0IDQyLjg4ODQgMTEyLjg5OSA0Mi45MDUgMTEyLjgyN0w0MS43NTkgMTEyLjU2MVpNNDMuMjg5MSAxMDcuNDI0QzQyLjMzNjQgMTEwLjE3NCA0MS44NzU2IDExMi4wNTkgNDEuNzU5IDExMi41NjFMNDIuOTA1IDExMi44MjdDNDMuMDEzOSAxMTIuMzU4IDQzLjQ2MzggMTEwLjUxNCA0NC40MDA4IDEwNy44MDlMNDMuMjg5MSAxMDcuNDI0WiIgLz4KICAgIDxtYXNrIGlkPSJwYXRoLTUtaW5zaWRlLTJfMTc0XzEyOTEiID4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MS4wMjMgMTAwLjI4MkMxNTEuMjA2IDk5LjExNDggMTUxLjMgOTcuOTI5OSAxNTEuMyA5Ni43MzA1QzE1MS4zIDc4LjAzNjcgMTI4LjQ5MSA2Mi44ODIzIDEwMC4zNTYgNjIuODgyM0M3Mi4yMjAxIDYyLjg4MjMgNDkuNDExNiA3OC4wMzY3IDQ5LjQxMTYgOTYuNzMwNUM0OS40MTE2IDk3LjkyOTkgNDkuNTA1NSA5OS4xMTQ3IDQ5LjY4ODcgMTAwLjI4MkwxMDAuMzU2IDg1LjAzNzdMMTUxLjAyMyAxMDAuMjgyWiIvPgogICAgPC9tYXNrPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNTEuMDIzIDEwMC4yODJDMTUxLjIwNiA5OS4xMTQ4IDE1MS4zIDk3LjkyOTkgMTUxLjMgOTYuNzMwNUMxNTEuMyA3OC4wMzY3IDEyOC40OTEgNjIuODgyMyAxMDAuMzU2IDYyLjg4MjNDNzIuMjIwMSA2Mi44ODIzIDQ5LjQxMTYgNzguMDM2NyA0OS40MTE2IDk2LjczMDVDNDkuNDExNiA5Ny45Mjk5IDQ5LjUwNTUgOTkuMTE0NyA0OS42ODg3IDEwMC4yODJMMTAwLjM1NiA4NS4wMzc3TDE1MS4wMjMgMTAwLjI4MloiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8xNzRfMTI5MSkiLz4KICAgIDxwYXRoIGQ9Ik0xNTEuMDIzIDEwMC4yODJMMTUwLjY4NCAxMDEuNDA5TDE1MS45NzYgMTAxLjc5N0wxNTIuMTg1IDEwMC40NjRMMTUxLjAyMyAxMDAuMjgyWk00OS42ODg3IDEwMC4yODJMNDguNTI2NCAxMDAuNDY0TDQ4LjczNTYgMTAxLjc5N0w1MC4wMjc2IDEwMS40MDhMNDkuNjg4NyAxMDAuMjgyWk0xMDAuMzU2IDg1LjAzNzdMMTAwLjY5NCA4My45MTExTDEwMC4zNTYgODMuODA5MUwxMDAuMDE3IDgzLjkxMTFMMTAwLjM1NiA4NS4wMzc3Wk0xNTAuMTIzIDk2LjczMDVDMTUwLjEyMyA5Ny44NjgzIDE1MC4wMzQgOTguOTkyMiAxNDkuODYxIDEwMC4xTDE1Mi4xODUgMTAwLjQ2NEMxNTIuMzc4IDk5LjIzNzMgMTUyLjQ3NiA5Ny45OTE1IDE1Mi40NzYgOTYuNzMwNUgxNTAuMTIzWk0xMDAuMzU2IDY0LjA1ODhDMTE0LjIyNSA2NC4wNTg4IDEyNi43MjcgNjcuNzk1OSAxMzUuNzI4IDczLjc3NjFDMTQ0LjczNyA3OS43NjIgMTUwLjEyMyA4Ny45MDEyIDE1MC4xMjMgOTYuNzMwNUgxNTIuNDc2QzE1Mi40NzYgODYuODY2IDE0Ni40NTkgNzguMDgxIDEzNy4wMyA3MS44MTYzQzEyNy41OTIgNjUuNTQ1OSAxMTQuNjIzIDYxLjcwNTkgMTAwLjM1NiA2MS43MDU5VjY0LjA1ODhaTTUwLjU4ODEgOTYuNzMwNUM1MC41ODgxIDg3LjkwMTIgNTUuOTc0NiA3OS43NjIgNjQuOTgzOSA3My43NzYxQzczLjk4NDYgNjcuNzk1OSA4Ni40ODcgNjQuMDU4OCAxMDAuMzU2IDY0LjA1ODhWNjEuNzA1OUM4Ni4wODg4IDYxLjcwNTkgNzMuMTE5MiA2NS41NDU5IDYzLjY4MTggNzEuODE2M0M1NC4yNTI5IDc4LjA4MSA0OC4yMzUyIDg2Ljg2NiA0OC4yMzUyIDk2LjczMDVINTAuNTg4MVpNNTAuODUwOSAxMDAuMDk5QzUwLjY3NzEgOTguOTkyMSA1MC41ODgxIDk3Ljg2ODMgNTAuNTg4MSA5Ni43MzA1SDQ4LjIzNTJDNDguMjM1MiA5Ny45OTE1IDQ4LjMzMzkgOTkuMjM3MiA0OC41MjY0IDEwMC40NjRMNTAuODUwOSAxMDAuMDk5Wk01MC4wMjc2IDEwMS40MDhMMTAwLjY5NCA4Ni4xNjQyTDEwMC4wMTcgODMuOTExMUw0OS4zNDk3IDk5LjE1NTNMNTAuMDI3NiAxMDEuNDA4Wk0xMDAuMDE3IDg2LjE2NDJMMTUwLjY4NCAxMDEuNDA5TDE1MS4zNjIgOTkuMTU1NEwxMDAuNjk0IDgzLjkxMTFMMTAwLjAxNyA4Ni4xNjQyWiIgIG1hc2s9InVybCgjcGF0aC01LWluc2lkZS0yXzE3NF8xMjkxKSIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE3NF8xMjkxIiB4MT0iMTAwLjM2NyIgeTE9IjE3IiB4Mj0iMTAwLjM2NyIgeTI9IjU5LjQ2NDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3Q0I1QyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCRDg4MDAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xNzRfMTI5MSIgeDE9IjEwMCIgeTE9IjkwLjcyMTIiIHgyPSIxMDAiIHkyPSIxODMuMzA2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGN0NCNUMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkQ4ODAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMTc0XzEyOTEiIHgxPSIxMDAuMzU2IiB5MT0iNjIuODgyMyIgeDI9IjEwMC4zNTYiIHkyPSIxMDAuMjgyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGN0NCNUMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkQ4ODAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==",
        downloads: {
            chrome: "https://chrome.google.com/webstore/detail/tbd",
        },
    },
    {
        id: "argentX",
        name: "Argent X",
        icon: "data:image/svg;base64,Cjxzdmcgd2lkdGg9IjQwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgNDAgMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNC43NTgyIC0zLjk3MzY0ZS0wN0gxNC42MjM4QzE0LjI4NTEgLTMuOTczNjRlLTA3IDE0LjAxMzggMC4yODExNzggMTQuMDA2NCAwLjYzMDY4M0MxMy44MDE3IDEwLjQ1NDkgOC44MjIzNCAxOS43NzkyIDAuMjUxODkzIDI2LjM4MzdDLTAuMDIwMjA0NiAyNi41OTMzIC0wLjA4MjE5NDYgMjYuOTg3MiAwLjExNjczNCAyNy4yNzA5TDYuMDQ2MjMgMzUuNzM0QzYuMjQ3OTYgMzYuMDIyIDYuNjQwOTkgMzYuMDg3IDYuOTE3NjYgMzUuODc1NEMxMi4yNzY1IDMxLjc3MjggMTYuNTg2OSAyNi44MjM2IDE5LjY5MSAyMS4zMzhDMjIuNzk1MSAyNi44MjM2IDI3LjEwNTcgMzEuNzcyOCAzMi40NjQ2IDM1Ljg3NTRDMzIuNzQxIDM2LjA4NyAzMy4xMzQxIDM2LjAyMiAzMy4zMzYxIDM1LjczNEwzOS4yNjU2IDI3LjI3MDlDMzkuNDY0MiAyNi45ODcyIDM5LjQwMjIgMjYuNTkzMyAzOS4xMzA0IDI2LjM4MzdDMzAuNTU5NyAxOS43NzkyIDI1LjU4MDQgMTAuNDU0OSAyNS4zNzU5IDAuNjMwNjgzQzI1LjM2ODUgMC4yODExNzggMjUuMDk2OSAtMy45NzM2NGUtMDcgMjQuNzU4MiAtMy45NzM2NGUtMDdaIiBmaWxsPSIjRkY4NzVCIi8+Cjwvc3ZnPgo=",
        downloads: {
            chrome: "https://chrome.google.com/webstore/detail/argent-x-starknet-wallet/dlcobpjiigpikoobohmabehhmhfoodbb",
        },
    },
];
export default Array.from(wallets);
