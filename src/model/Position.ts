class Position {
    public row: number;
    public col: number;

    public constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }

    public static add(pos1: Position, pos2: Position): Position {
        return new Position(pos1.row + pos2.row, pos1.col + pos2.col);
    }

    public add(other: Position): Position {
        return Position.add(this, other);
    }

    public addRow(row: number): Position {
        return this.add(new Position(row, 0));
    }

    public addCol(col: number): Position {
        return this.add(new Position(0, col));
    }

    public equals(other: Position): boolean {
        return this.row === other.row && this.col === other.col;
    }
}

export {Position};
