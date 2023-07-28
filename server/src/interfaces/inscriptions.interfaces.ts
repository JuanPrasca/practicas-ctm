export interface inscriptionData {
  nombre_inscripcion: string
  apellido_inscripcion: string
  tipo_documento_inscripcion: string
  documento_inscripción: number
  email_inscripcion: string
  inscripción_celular: number
  etapa_actual_inscripcion: string
  modalidad_inscripción: string
  nombre_programa_inscripción: string
  nivel_formacion_inscripcion: string
  numero_ficha_inscripcion: number
  fecha_fin_lectiva_inscripcion: Date
  nombre_instructor_lider_inscripcion: string
  email_instructor_lider_inscripcion: string
  apoyo_sostenimiento_inscripcion: string
  nit_empresa_inscripcion?: number
  nombre_empresa_inscripción?: string
  direccion_empresa_inscripcion?: string
  nombre_jefe_empresa_inscripcion?: string
  cargo_jefe_empresa_inscripcion?: string
  telefono_jefe_empresa_inscripcion?: number
  email_jefe_empresa_inscripcion?: string
  arl?: string
  link_documentos: string
  observaciones: string
  estado_general_inscripcion?: string
  fecha_creación?: Date
  responsable_inscripcion: string
}

export interface inscripcionDetailData {
  id_detalle_inscripcion?: number
  responsable_aval: number
  estado_aval: string
  observaciones: string
  id_inscripcion: number
}
