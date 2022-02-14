function exist(board, word) {
    const row = board.length;
    const column = board[0].length;
    const length = word.length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (dfs(board, i, j, word, 0)) {
                return true;
            }
        }
    }
    function dfs(board, i, j, word, k) {
        if (i >= row || j >= column || i < 0 || j < 0 || board[i][j] !== word[k]) return false;
        if (k === length - 1) return true;
        board[i][j] = "/0";
        const res = dfs(board, i - 1, j, word, k + 1) || dfs(board, i + 1, j, word, k + 1) || dfs(board, i, j - 1, word, k + 1) || dfs(board, i, j + 1, word, k + 1);
        board[i][j] = word[k];
        return res;
    }
    return false;
}

function movingCount(m, n, k) {
    const set=new Set();
    function sums(x) {
        let sum = 0;
        while (x !== 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }
        return sum;
    }
    function dfs(i, j, si, sj, set) {
        if (i >= m || j >= n || k < si + sj || set.has(`${i}-${j}`)) return 0;
        set.add(`${i}-${j}`);
        return 1 + dfs(i + 1, j, sums(i + 1), sums(j), set) + dfs(i, j + 1, sums(i), sums(j + 1), set)
    }
    return dfs(0, 0, 0, 0, set)
}