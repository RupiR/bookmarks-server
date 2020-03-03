const BookmarksService = {
  getAllBookmarks(knex) {
    return knex.select('*').from('bookmark_list');
  },
  getById(knex, id) {
    return knex
      .from('bookmark_list')
      .select('*')
      .where('id', id)
      .first();
  },

  insertBookmark(knex, newBookmark) {
    return knex
      .insert(newBookmark)
      .into('bookmark_list')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  deleteBookmark(knex, id) {
    return knex('bookmark_list')
      .where({ id })
      .delete();
  },
  updateBookmark(knex, id, newBookmarkFields) {
    return knex('bookmark_list')
      .where({ id })
      .update(newBookmarkFields);
  }
};

module.exports = BookmarksService;
