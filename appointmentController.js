const pool = require("../config/db");

// Get all appointments
const getAllAppointments = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT a.*, s.name as service_name, s.price as service_price 
      FROM appointments a 
      LEFT JOIN services s ON a.service_id = s.id 
      ORDER BY a.appointment_date DESC, a.appointment_time DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `
      SELECT a.*, s.name as service_name, s.price as service_price 
      FROM appointments a 
      LEFT JOIN services s ON a.service_id = s.id 
      WHERE a.id = $1
    `,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Create new appointment
const createAppointment = async (req, res) => {
  try {
    const {
      customer_name,
      customer_phone,
      customer_email,
      service_id,
      appointment_date,
      appointment_time,
    } = req.body;
    const result = await pool.query(
      `INSERT INTO appointments 
       (customer_name, customer_phone, customer_email, service_id, appointment_date, appointment_time, status) 
       VALUES ($1, $2, $3, $4, $5, $6, 'pending') RETURNING *`,
      [
        customer_name,
        customer_phone,
        customer_email,
        service_id,
        appointment_date,
        appointment_time,
      ],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Update appointment
const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await pool.query(
      "UPDATE appointments SET status = $1 WHERE id = $2 RETURNING *",
      [status, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete appointment
const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM appointments WHERE id = $1 RETURNING *",
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.json({ message: "Appointment cancelled successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
