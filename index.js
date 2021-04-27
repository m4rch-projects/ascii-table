module.exports = class Table {
	constructor (title, options) {
		this.title = title

		this.head = []
		this.rows = []
	}
	header ( ...items ) {
		this.head = items
	}
	row ( ...items ) {
		this.rows.push(items)
	}
	toString () {
		let rowLength = Math.max(...[].concat([this.head]).concat(this.rows).map(( row ) => row.length))

		let columns = Array(rowLength).fill().map((c, i) => [].concat(this.head.length ? [this.head] : []).concat(this.rows).map(( row ) => row[i]?.toString() || ""))
		let widths = Array(rowLength).fill().map((c, i) => Math.max(...columns[i].map(( el ) => el.length)))

		columns = columns.map(( column, index ) => column.map(item => item.padEnd(widths[index])).map(( item ) => ` ${item} `))

		let rows = Array(columns[0]?.length || 0).fill().map((r, i) => columns.map(column => column[i]))
		if (this.head.length) rows.splice(1, 0, Array(widths.length).fill().map((e, i) => Array(widths[i] + 2).fill("-").join("")))
		rows = rows.map(row => row.join("|"))

		let width = rows[0].length || 0
		if (this.title) rows = [` ${this.title}`.padEnd(width), Array(width).fill("-").join("")].concat(rows)

		rows = rows.map(row => `|${row}|`)
		rows = [`.${Array(width).fill("-").join("")}.`].concat(rows).concat([`\`${Array(width).fill("-").join("")}\´`])

		return rows.join("\n")
	}
}
